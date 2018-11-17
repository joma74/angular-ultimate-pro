import { Component, EventEmitter, Input, Output } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { Product } from "../../models/product.interface"

@Component({
  selector: "stock-selector",
  styleUrls: ["stock-selector.component.scss"],
  template: `
    <div [formGroup]="parent" class="stock-selector">
      <div formGroupName="selector">
        <select formControlName="product_id">
          <option value="">Select stock</option>
          <option *ngFor="let product of products" [value]="product.id">{{
            product.name
          }}</option>
        </select>
        <stock-counter
          [step]="10"
          [min]="10"
          [max]="100"
          formControlName="quantity"
        ></stock-counter>
        <button
          type="button"
          [disabled]="stockExists || notSelected"
          (click)="onAdd()"
        >
          Add stock
        </button>
        <div *ngIf="stockExists" class="stock-selector__error">
          Item already exists in the stock
        </div>
      </div>
    </div>
  `,
})
export class StockSelectorComponent {
  @Input()
  public parent: FormGroup

  @Input()
  public products: Product[]

  @Output()
  public added = new EventEmitter()

  get stockExists() {
    return (
      this.parent.hasError("stockExists") &&
      this.parent.get("selector.product_id").dirty
    )
  }

  get notSelected() {
    const productId = this.parent.get("selector.product_id").value as string
    return !productId
  }

  public onAdd() {
    this.added.emit(this.parent.get("selector").value)
    this.parent.get("selector").reset({
      product_id: "",
      quantity: 10,
    })
  }
}
