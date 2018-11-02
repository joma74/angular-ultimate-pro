import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component"
import { ExampleOneComponent } from "./one/one.component"
import { ExampleTwoComponent } from "./two/two.component"

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, ExampleOneComponent, ExampleTwoComponent],
  imports: [BrowserModule, CommonModule],
})
export class AppModule {}
