import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { BrowserModule } from "@angular/platform-browser"
import { AppComponent } from "./app.component"
import { FileSizePipe } from "./filesize.pipe"

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent, FileSizePipe],
  imports: [BrowserModule, CommonModule],
})
export class AppModule {}
