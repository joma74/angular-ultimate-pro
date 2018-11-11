import { Component } from "@angular/core"
import { FormArray, FormControl, FormGroup } from "@angular/forms"
import { Product } from "../../models/product.interface"

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
        <stock-products [parent]="form"></stock-products>
        <div class="store-inventory__buttons">
          <button type="submit" [disabled]="form.invalid">Order stock</button>
        </div>
        <pre>{{ form.value | json }}</pre>
      </form>
    </div>
  `,
})
export class StockInventoryComponent {
  public products: Product[] = [
    {
      id: 1,
      name: "MacBook Pro",
      price: 2800,
    },
    {
      id: 2,
      name: "USB-C Adapter",
      price: 50,
    },
    {
      id: 3,
      name: "iPod",
      price: 400,
    },
    {
      id: 4,
      name: "iPhone",
      price: 900,
    },
    {
      id: 5,
      name: "Apple Watch",
      price: 600,
    },
  ]

  public form = new FormGroup({
    selector: this.createStock({}),
    stock: new FormArray([]),
    store: new FormGroup({
      branch: new FormControl(""),
      code: new FormControl(""),
    }),
  })

  public addStock(stock: any) {
    const control = this.form.get("stock") as FormArray
    control.push(this.createStock(stock))
  }

  public createStock(stock: any) {
    return new FormGroup({
      product_id: new FormControl(parseInt(stock.product_id, 10) || ""),
      quantity: new FormControl(stock.quantity || 10),
    })
  }

  public onSubmit() {
    // tslint:disable-next-line:no-console
    console.log("Submit:", this.form.value)
  }
}
