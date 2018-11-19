import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { RouterModule, Routes } from "@angular/router"

import { MailAppComponent } from "./components/mail-app/mail-app.component"
import { MailItemComponent } from "./components/mail-item/mail-item.component"
import { MailFolderComponent } from "./containers/mail-folder/mail-folder.component"

export const ROUTES: Routes = [
  { path: "folder/:name", component: MailFolderComponent },
]

@NgModule({
  declarations: [MailFolderComponent, MailAppComponent, MailItemComponent],
  exports: [MailAppComponent],
  imports: [CommonModule, RouterModule.forChild(ROUTES)],
})
export class MailModule {}
