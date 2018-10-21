import { CommonModule } from "@angular/common"
import { NgModule } from "@angular/core"
import { FormsModule } from "@angular/forms"

import { AuthFormComponent } from "./auth-form.component"
import { AuthRememberComponent } from "./auth-remember.component"

@NgModule({
  declarations: [AuthFormComponent, AuthRememberComponent],
  exports: [AuthFormComponent, AuthRememberComponent],
  imports: [CommonModule, FormsModule],
})
export class AuthFormModule {}
