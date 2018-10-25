import {
  AfterContentInit,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
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
        <button (click)="destroyComponent()"
            class="mb-4 bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Destroy me
        </button>
        <div #entry (submitted)='loginUser($event)'>
        </div>
	</div>
  `,
})
export class AppComponent implements AfterContentInit {
  @ViewChild("entry", { read: ViewContainerRef })
  public entry: ViewContainerRef

  public component: ComponentRef<AuthFormComponent>

  constructor(private resolver: ComponentFactoryResolver) {}

  public ngAfterContentInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent,
    )
    this.component = this.entry.createComponent(authFormFactory)
    this.component.instance.title = "Login"
    this.component.instance.submitted.subscribe(this.loginUser)
  }

  public loginUser(user: User) {
    // tslint:disable-next-line:no-console
    console.log("Login", JSON.stringify(user))
  }

  public destroyComponent() {
    // tslint:disable-next-line:no-console
    console.log(this.component)
  }
}
