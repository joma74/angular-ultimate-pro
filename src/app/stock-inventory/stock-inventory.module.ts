import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms"

import { StockInventoryComponent } from "./containers/stock-inventory/stock-inventory.component"

@NgModule({
  declarations: [StockInventoryComponent],
  exports: [StockInventoryComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class StockInventoryModule {}
