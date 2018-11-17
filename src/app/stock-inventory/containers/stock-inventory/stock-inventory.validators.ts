import { AbstractControl } from "@angular/forms"
import { Stock } from "../../models/stock.interface"

export class StockValidators {
  public static checkStockExists(control: AbstractControl) {
    const stockItems = control.get("stock")
    const selector = control.get("selector")

    if (!(stockItems && selector)) {
      return null
    }

    const stockItemsValue = stockItems.value as Stock[]
    const selectorValue = selector.value as {
      product_id: string
      quantity: number
    }

    /**
     * ? selectorValue.product_id is a string
     */
    const exists = stockItemsValue.some((stock) => {
      return stock.product_id === parseInt(selectorValue.product_id, 10)
    })

    return exists ? { stockExists: true } : null
  }

  public static checkBranch(control: AbstractControl) {
    const regexp = /^[a-z]\d{3}$/i
    const valid = regexp.test(control.value)
    return valid ? null : { invalidBranch: true }
  }
}
