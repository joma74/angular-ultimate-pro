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
      <button
        (click)="destroyComponent()"
        data-desc="destroy"
        class="mb-4 bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Destroy Login
      </button>
      <button
        (click)="moveComponent()"
        data-desc="move"
        class="mb-4 bg-red hover:bg-red-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Move Login <-> No tile given
      </button>
      <div #entry (submitted)="loginUser($event)"></div>
    </div>
  `,
})
export class AppComponent implements AfterContentInit {
  @ViewChild("entry", { read: ViewContainerRef })
  public entry: ViewContainerRef

  public component: ComponentRef<AuthFormComponent>

  private displayIndex: number = 0

  constructor(private resolver: ComponentFactoryResolver) {}

  public ngAfterContentInit(): void {
    const authFormFactory = this.resolver.resolveComponentFactory(
      AuthFormComponent,
    )
    const component1 = this.entry.createComponent(authFormFactory)
    component1.instance.desc = "heading-2"
    //
    this.component = this.entry.createComponent(
      authFormFactory,
      this.displayIndex,
    )
    this.component.instance.title = "Login"
    this.component.instance.desc = "heading-1"
    this.component.instance.submitted.subscribe(this.loginUser)
  }

  public loginUser(user: User) {
    // tslint:disable-next-line:no-console
    console.log("Login", JSON.stringify(user))
  }

  public destroyComponent() {
    this.component.destroy()
  }

  public moveComponent() {
    this.displayIndex <= 0 ? (this.displayIndex = 1) : (this.displayIndex = 0)
    this.entry.move(this.component.hostView, this.displayIndex)
  }
}
