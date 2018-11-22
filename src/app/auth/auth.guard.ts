import { Injectable } from "@angular/core"
import { CanActivate, CanActivateChild, CanLoad } from "@angular/router"
import { Observable } from "rxjs"
import { AuthService } from "./auth.service"

@Injectable()
export class AuthGuard implements CanLoad, CanActivate, CanActivateChild {
  constructor(private authService: AuthService) {}

  public canLoad(): Observable<boolean> {
    return this.authService.checkPermissions()
  }

  public canActivate(): Observable<boolean> {
    return this.authService.isLoggedIn()
  }

  public canActivateChild(): boolean {
    return false
  }
}
