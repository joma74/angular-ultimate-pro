import { Component } from "@angular/core"
import { FormArray, FormControl, FormGroup } from "@angular/forms"

@Component({
  selector: "stock-inventory",
  styleUrls: ["stock-inventory.component.scss"],
  template: `
    <div class="stock-inventory">
      <form [formGroup]="form" (ngSubmit)="onSubmit()">
        <div formGroupName="store">
          <!-- display: block -->
          <input type="text" placeholder="Branch ID" formControlName="branch" />
          <input
            type="text"
            placeholder="Manager Code"
            formControlName="code"
          />
        </div>
        <div class="store-inventory__buttons">
          <button type="submit" [disabled]="form.invalid">Order stock</button>
        </div>
        <pre>{{ form.value | json }}</pre>
      </form>
    </div>
  `,
})
export class StockInventoryComponent {
  public form = new FormGroup({
    selector: new FormGroup({
      product_id: new FormControl(""),
      quantity: new FormControl(10),
    }),
    stock: new FormArray([]),
    store: new FormGroup({
      branch: new FormControl(""),
      code: new FormControl(""),
    }),
  })

  public onSubmit() {
    // tslint:disable-next-line:no-console
    console.log("Submit:", this.form.value)
  }
}
