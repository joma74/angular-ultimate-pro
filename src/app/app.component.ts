import { Component } from "@angular/core"

import "../assets/css/styles.css"

@Component({
  selector: "app-root",
  template: `
	<div>
		<auth-form (submitted)="createUser($event)"></auth-form>
		<auth-form (submitted)="loginUser($event)"></auth-form>
	</div>
  `,
})
export class AppComponent {
  public title: string
  public major: number = 3
  public minor: number = 12
  public patch: number = 0
  public logo: string = "assets/images/angular.png"
  constructor() {
    this.title = "Hello"
  }
}
