import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component"
import { CreditCardDirective } from "./credit-card/credit-card.directive"
import { MyForDirective } from "./my-for/my-for.directive"
import { TooltipDirective } from "./tooltip/tooltip.directive"

@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
    CreditCardDirective,
    TooltipDirective,
    MyForDirective,
  ],
  imports: [BrowserModule, CommonModule],
})
export class AppModule {}
