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
import { AuthGuard } from "./auth/auth.guard"
import { AuthModule } from "./auth/auth.module"

export class CustomPreload implements PreloadingStrategy {
  public preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return route.data && route.data.preload ? fn() : Observable.of(null)
  }
}

export const ROUTES: Routes = [
  {
    canLoad: [AuthGuard],
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
    AuthModule,
    BrowserModule,
    HttpModule,
    MailModule,
    RouterModule.forRoot(ROUTES, { preloadingStrategy: CustomPreload }),
  ],
  providers: [CustomPreload],
})
export class AppModule {}
