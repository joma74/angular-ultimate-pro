import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { MailAppComponent } from "./components/mail-app/mail-app.component"
import { MailItemComponent } from "./components/mail-item/mail-item.component"
import { MailViewComponent } from "./components/mail-view/mail-view.component"
import { MailViewResolve } from "./components/mail-view/mail-view.resolve"
import { MailFolderComponent } from "./containers/mail-folder/mail-folder.component"
import { MailFolderResolve } from "./containers/mail-folder/mail-folder.resolve"
import { MailService } from "./mail.services"

export const ROUTES: Routes = [
  {
    component: MailFolderComponent,
    path: "folder/:name",
    resolve: { messages: MailFolderResolve },
  },
  {
    component: MailViewComponent,
    outlet: "pane",
    path: "message/:id",
    resolve: {
      message: MailViewResolve,
    },
  },
]

@NgModule({
  declarations: [
    MailFolderComponent,
    MailAppComponent,
    MailItemComponent,
    MailViewComponent,
  ],
  exports: [MailAppComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
  providers: [MailService, MailFolderResolve, MailViewResolve],
})
export class MailModule {}
