import { Component, OnInit } from "@angular/core"
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms"
import { Observable } from "rxjs"
import { Product } from "../../models/product.interface"
import { StockInventoryService } from "../../services/stock-inventory.service"
import { Stock } from "./../../models/stock.interface"
import { StockValidators } from "./stock-inventory.validators"

@Component({
  providers: [StockInventoryService],
  selector: "stock-inventory",
  styleUrls: ["stock-inventory.component.scss"],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <stock-branch [parent]="form"></stock-branch>
        <stock-selector
          [parent]="form"
          [products]="products"
          (added)="addStock($event)"
        ></stock-selector>
        <stock-products
          [parent]="form"
          [map]="productMap"
          (removed)="removeStock($event)"
        ></stock-products>
        <div class="stock-product__price">
          Total: {{ total | currency: "USD":true }}
        </div>
        <div class="store-inventory__buttons">
          <button type="submit" [disabled]="form.invalid">Order stock</button>
        </div>
        <pre>{{ form.value | json }}</pre>
      </form>
    </div>
  `,
})
export class StockInventoryComponent implements OnInit {
  public products: Product[]

  public productMap: Map<number, Product>

  public total: number

  public form = this.fb.group(
    {
      selector: this.createStock({}),
      stock: this.fb.array([]),
      store: this.fb.group({
        branch: [
          "",
          [Validators.required, StockValidators.checkBranch],
          this.validateBranch.bind(this),
        ],
        code: ["", [Validators.required]],
      }),
    },
    { validator: StockValidators.checkStockExists },
  )

  constructor(
    private fb: FormBuilder,
    private stockService: StockInventoryService,
  ) {}

  public ngOnInit(): void {
    const stocks$$ = this.stockService.getStock()
    const products$$ = this.stockService.getProducts()

    Observable.forkJoin(stocks$$, products$$).subscribe(
      ([stocks, products]: [Stock[], Product[]]) => {
        const myMap = products.map<[number, Product]>((product) => [
          product.id,
          product,
        ])
        this.productMap = new Map<number, Product>(myMap)
        this.products = products

        stocks.forEach((item) => this.addStock(item))

        this.calculateTotal(this.form.get("stock").value)

        this.form.get("stock").valueChanges.subscribe((value) => {
          this.calculateTotal(value)
        })
      },
    )
  }

  public addStock(stock: any) {
    const control = this.form.get("stock") as FormArray
    control.push(this.createStock(stock))
  }

  public removeStock({ stock, index }: { stock: FormGroup; index: number }) {
    const control = this.form.get("stock") as FormArray
    stock = stock
    control.removeAt(index)
  }

  public createStock(stock: any) {
    return this.fb.group({
      product_id: parseInt(stock.product_id, 10) || "",
      quantity: stock.quantity || 10,
    })
  }

  public calculateTotal(value: Stock[]) {
    const total = value.reduce((prev, next) => {
      return prev + next.quantity * this.productMap.get(next.product_id).price
    }, 0)
    this.total = total
  }

  public validateBranch(control: AbstractControl) {
    return this.stockService
      .checkBranchId(control.value)
      .map((response: boolean) => {
        return response ? null : { unknownBranch: true }
      })
  }

  public onSubmit() {
    // tslint:disable-next-line:no-console
    console.log("Submit:", this.form.value)
  }
}
