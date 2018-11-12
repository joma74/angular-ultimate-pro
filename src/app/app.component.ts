import { Component } from "@angular/core"
import { User } from "./auth-form/auth-form.interface"

import "../assets/css/styles.css"

@Component({
  selector: "app-root",
  template: `
    <div class="container mx-auto bg-grey-lighter mt-10 p-8 shadow-md">
      <div class="flex flex-row justify-around">
        <auth-form (submitted)="createUser($event)">
          <h3 data-desc="heading-1">Create account</h3>
          <button
            class="bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Join us
          </button>
        </auth-form>
        <div class="bg-grey-light" style="width: 2px"></div>
        <auth-form (submitted)="loginUser($event)">
          <h3 data-desc="heading-2">Login</h3>
          <auth-remember (checked)="rememberUser($event)"></auth-remember>
          <button
            class="bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Login
          </button>
        </auth-form>
      </div>
    </div>
  `,
})
export class AppComponent {
  public rememberMe: boolean = false

  public createUser(user: User) {
    // tslint:disable-next-line:no-console
    console.log("Create account", JSON.stringify(user))
  }

  public loginUser(user: User) {
    const loggable = Object.assign({}, user, this)
    // tslint:disable-next-line:no-console
    console.log("Login", JSON.stringify(loggable))
  }

  public rememberUser(remember: boolean) {
    this.rememberMe = remember
  }
}
