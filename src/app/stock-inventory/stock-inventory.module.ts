import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms"

import { StockBranchComponent } from "./components/stock-branch/stock-branch.component"
import { StockProductsComponent } from "./components/stock-products/stock-products.component"
import { StockSelectorComponent } from "./components/stock-selector/stock-selector.component"
import { StockInventoryComponent } from "./containers/stock-inventory/stock-inventory.component"

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent,
  ],
  exports: [StockInventoryComponent],
  imports: [CommonModule, ReactiveFormsModule],
})
export class StockInventoryModule {}
