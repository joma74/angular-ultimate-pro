import { NgModule } from "@angular/core"
import { HttpModule } from "@angular/http"
import { BrowserModule } from "@angular/platform-browser"
import { RouterModule, Routes } from "@angular/router"

import { MailModule } from "./mail/mail.module"

import { AppComponent } from "./app.component"

export const ROUTES: Routes = [{ path: "**", redirectTo: "folder/inbox" }]

@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    MailModule,
    RouterModule.forRoot(ROUTES),
  ],
})
export class AppModule {}
