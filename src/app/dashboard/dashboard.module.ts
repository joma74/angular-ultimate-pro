import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"
import { DashboardComponent } from "./containers/dashboard/dashboard.component"

export const ROUTES: Routes = [{ path: "", component: DashboardComponent }]

@NgModule({
  declarations: [DashboardComponent],
  exports: [DashboardComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class DashboardModule {}
