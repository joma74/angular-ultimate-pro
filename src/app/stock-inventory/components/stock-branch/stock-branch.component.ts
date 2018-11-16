import { Component, Input } from "@angular/core"
import { FormGroup } from "@angular/forms"

@Component({
  selector: "stock-branch",
  styleUrls: ["stock-branch.component.scss"],
  template: `
    <div [formGroup]="parent" class="stock-products">
      <div formGroupName="store">
        <!-- display: block -->
        <input type="text" placeholder="Branch ID" formControlName="branch" />
        <div *ngIf="required('branch')" class="error">
          Branch ID is required
        </div>
        <input type="text" placeholder="Manager Code" formControlName="code" />
        <div *ngIf="required('code')" class="error">Code is required</div>
      </div>
    </div>
  `,
})
export class StockBranchComponent {
  @Input()
  public parent: FormGroup

  public required(controlName: string) {
    return (
      this.parent.get(`store.${controlName}`).hasError("required") &&
      this.parent.get(`store.${controlName}`).touched
    )
  }
}
