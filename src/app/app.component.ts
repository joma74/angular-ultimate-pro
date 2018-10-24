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
		<div class="flex flex-row justify-around">
            <div #entry>
            <h3 data-desc="heading-2">Login</h3>
            <button class="bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Login
            </button>
            </div>
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
  }

  public loginUser(user: User) {
    const loggable = Object.assign({}, user, this)
    // tslint:disable-next-line:no-console
    console.log("Login", JSON.stringify(loggable))
  }
}
