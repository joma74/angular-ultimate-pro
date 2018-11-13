import { Component, OnInit } from "@angular/core"
import { FormArray, FormBuilder, FormGroup } from "@angular/forms"
import { Observable } from "rxjs"
import { Product } from "../../models/product.interface"
import { StockInventoryService } from "../../services/stock-inventory.service"
import { Stock } from "./../../models/stock.interface"

@Component({
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
          (removed)="removeStock($event)"
        ></stock-products>
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

  public form = this.fb.group({
    selector: this.createStock({}),
    stock: this.fb.array([]),
    store: this.fb.group({
      branch: "",
      code: "",
    }),
  })

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

  public onSubmit() {
    // tslint:disable-next-line:no-console
    console.log("Submit:", this.form.value)
  }
}
