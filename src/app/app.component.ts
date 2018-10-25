import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
} from "@angular/core"
import { AuthFormComponent } from "./auth-form/auth-form.component"
import { User } from "./auth-form/auth-form.interface"

import "../assets/css/styles.css"

@Component({
  selector: "app-root",
  template: `
	<div class="container mx-auto bg-grey-lighter mt-10 p-8 shadow-md">
        <div #entry (submitted)='loginUser($event)'>
        </div>
	</div>
  `,
})
export class AppComponent implements AfterContentInit {
  @ViewChild("entry", { read: ViewContainerRef })
  public entry: ViewContainerRef

  constructor(private resolver: ComponentFactoryResolver) {}

  public ngAfterContentInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent,
    )
    const component = this.entry.createComponent(authFormFactory)
    component.instance.title = "Login"
    component.instance.submitted.subscribe(this.loginUser)
  }

  public loginUser(user: User) {
    // tslint:disable-next-line:no-console
    console.log("Login", JSON.stringify(user))
  }
}
