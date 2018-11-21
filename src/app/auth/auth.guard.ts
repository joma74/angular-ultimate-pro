import { Injectable } from "@angular/core"
import { CanLoad } from "@angular/router"
import { Observable } from "rxjs"
import { AuthService } from "./auth.service"

@Injectable()
export class AuthGuard implements CanLoad {
  constructor(private authService: AuthService) {}

  public canLoad(): Observable<boolean> {
    return this.authService.checkPermissions()
  }
}
