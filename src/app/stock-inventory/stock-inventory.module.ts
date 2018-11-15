import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { ReactiveFormsModule } from "@angular/forms"

import { HttpModule } from "@angular/http"
import { StockBranchComponent } from "./components/stock-branch/stock-branch.component"
import { StockCounterComponent } from "./components/stock-counter/stock-counter.component"
import { StockProductsComponent } from "./components/stock-products/stock-products.component"
import { StockSelectorComponent } from "./components/stock-selector/stock-selector.component"
import { StockInventoryComponent } from "./containers/stock-inventory/stock-inventory.component"
import { StockInventoryService } from "./services/stock-inventory.service"

@NgModule({
  declarations: [
    StockInventoryComponent,
    StockBranchComponent,
    StockProductsComponent,
    StockSelectorComponent,
    StockCounterComponent,
  ],
  exports: [StockInventoryComponent],
  imports: [CommonModule, HttpModule, ReactiveFormsModule],
  providers: [StockInventoryService],
})
export class StockInventoryModule {}
