import { NgModule } from "@angular/core"
import { HttpModule } from "@angular/http"
import { BrowserModule } from "@angular/platform-browser"
import {
  PreloadingStrategy,
  Route,
  RouterModule,
  Routes,
} from "@angular/router"

import { MailModule } from "./mail/mail.module"

import { Observable } from "rxjs"
import { AppComponent } from "./app.component"

export class CustomPreload implements PreloadingStrategy {
  public preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? fn() : Observable.of(null)
  }
}

export const ROUTES: Routes = [
  {
    data: { preload: false },
    loadChildren: "./dashboard/dashboard.module#DashboardModule",
    path: "dashboard",
  },
  { path: "**", redirectTo: "mail/folder/inbox" },
]

// tslint:disable-next-line:max-classes-per-file
@NgModule({
  bootstrap: [AppComponent],
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpModule,
    MailModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomPreload }),
  ],
  providers: [CustomPreload],
})
export class AppModule {}
