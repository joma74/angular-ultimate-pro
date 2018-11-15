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
        <input
          type="number"
          step="10"
          min="10"
          max="1000"
          formControlName="quantity"
        />
        <stock-counter [step]="10" [min]="10" [max]="100"></stock-counter>
        <button type="button" (click)="onAdd()">Add stock</button>
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

  public onAdd() {
    this.added.emit(this.parent.get("selector").value)
    this.parent.get("selector").reset({
      product_id: "",
      quantity: 10,
    })
  }
}
