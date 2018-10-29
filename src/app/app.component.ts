import { Component } from "@angular/core"

import "../assets/css/styles.css"

@Component({
  selector: "main-app",
  templateUrl: "./app.component.html",
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
