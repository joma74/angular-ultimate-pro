import { Injectable } from "@angular/core"
import { Observable } from "rxjs"

@Injectable()
export class AuthService {
  private user = { isAdmin: true }

  public checkPermissions() {
    return Observable.of(this.user.isAdmin)
  }
  public isLoggedIn() {
    return Observable.of(true)
  }
}
