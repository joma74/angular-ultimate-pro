import { Component, EventEmitter, Input, Output } from "@angular/core"
import { FormArray, FormGroup } from "@angular/forms"
import { Product } from "../../models/product.interface"
@Component({
  selector: "stock-products",
  styleUrls: ["stock-products.component.scss"],
  template: `
    <div [formGroup]="parent" class="stock-products">
      <div formArrayName="stock">
        <div *ngFor="let item of stocks; let i = index">
          <div class="stock-product__content" [formGroupName]="i">
            <div class="stock-product__name">
              {{ getProduct(item.value.product_id).name }}
            </div>
            <div class="stock-product__price">
              {{
                getProduct(item.value.product_id).price | currency: "USD":true
              }}
            </div>
            <input
              type="number"
              step="10"
              min="10"
              max="1000"
              formControlName="quantity"
            />
            <button type="button" (click)="onRemove(item, i)">Remove</button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class StockProductsComponent {
  @Input()
  public parent: FormGroup

  @Input()
  public map: Map<number, Product>

  @Output()
  public removed = new EventEmitter<any>()

  get stocks() {
    return (this.parent.get("stock") as FormArray).controls
  }

  public getProduct(id: number) {
    return this.map.get(id)
  }

  public onRemove(item: FormGroup, i: number) {
    this.removed.emit({ stock: item, index: i })
  }
}
