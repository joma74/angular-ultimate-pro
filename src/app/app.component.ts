import { Component } from "@angular/core"
import { User } from "./auth-form/auth-form.interface"

import "../assets/css/styles.css"

@Component({
  selector: "app-root",
  template: `
	<div class="container mx-auto bg-grey-lighter mt-10 p-8 shadow-md">
		<div class="flex flex-row justify-around">
			<auth-form (submitted)="createUser($event)"></auth-form>
			<div class="bg-grey-light" style="width: 2px"></div>
			<auth-form (submitted)="loginUser($event)"></auth-form>
		</div>
	</div>
  `,
})
export class AppComponent {
  public createUser(user: User) {
    // tslint:disable-next-line:no-console
    console.log("Create account", user)
  }

  public loginUser(user: User) {
    // tslint:disable-next-line:no-console
    console.log("Login", user)
  }
}
