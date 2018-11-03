import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component"
import { CreditCardDirective } from "./credit-card/credit-card.directive"

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, CreditCardDirective],
  imports: [BrowserModule, CommonModule],
})
export class AppModule {}
