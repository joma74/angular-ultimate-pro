import { Component, Input } from "@angular/core"
import { FormGroup } from "@angular/forms"
import { Product } from "../../models/product.interface"

@Component({
  selector: "stock-selector",
  styleUrls: ["stock-selector.component.scss"],
  template: `
    <div [formGroup]="parent" class="stock-selector"></div>
  `,
})
export class StockSelectorComponent {
  @Input()
  public parent: FormGroup

  @Input()
  public products: Product[]
}
