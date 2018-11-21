import { NgModule } from "@angular/core"
import { AuthGuard } from "./auth.guard"
import { AuthService } from "./auth.service"

@NgModule({
  providers: [AuthGuard, AuthService],
})
export class AuthModule {}
