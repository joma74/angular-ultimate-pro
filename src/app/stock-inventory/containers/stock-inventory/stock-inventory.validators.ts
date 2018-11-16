import { AbstractControl } from "@angular/forms"

export class StockValidators {
  public static checkBranch(control: AbstractControl) {
    const regexp = /^[a-z]\d{3}$/i
    const valid = regexp.test(control.value)
    return valid ? null : { invalidBranch: true }
  }
}
