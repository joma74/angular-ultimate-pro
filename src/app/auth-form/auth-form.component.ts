import {
  AfterContentInit,
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  ElementRef,
  EventEmitter,
  Output,
  QueryList,
  Renderer,
  ViewChild,
  ViewChildren,
} from "@angular/core"

import { Remember, User } from "./auth-form.interface"
import { AuthMessageComponent } from "./auth-message.component"
import { AuthRememberComponent } from "./auth-remember.component"

@Component({
  selector: "auth-form",
  template: `
	<div class="no-m-coll">
	  <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
        <h3 data-desc="heading-2">{{title}}</h3>  
		<div class="mt-4">
			<label class="block text-grey-darker text-sm font-bold mb-2">
				Email address
			</label>
			<input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" 
				type="email" 
				name="email" 
			ngModel #email>
		</div>
		<div class="no-m-coll"></div>
		<div class="mt-4">
			<label class="block text-grey-darker text-sm font-bold mb-2">
				Password
			</label>
			<input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" 
				type="password" 
				name="password" 
			ngModel>
		</div>
		<div class="no-m-coll"></div>
		<div class="mt-6">
            <auth-remember (checked)="rememberUser($event)"></auth-remember>
            <auth-message 
                [style.display]="(showMessage ? 'inherit' : 'none')">
            </auth-message>
		</div>
		<div class="no-m-coll"></div>
		<div class="mt-4">
            <button class="bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Login
            </button>
		</div>
      </form>
    </div>
  `,
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  public title: string = "No title given"

  public showMessage: boolean

  public rememberMe: boolean = false

  @ViewChild("email")
  public email: ElementRef

  @ViewChildren(AuthMessageComponent)
  public message: QueryList<AuthMessageComponent>

  @ContentChildren(AuthRememberComponent)
  public remember: QueryList<AuthRememberComponent>

  @Output()
  public submitted: EventEmitter<User & Remember> = new EventEmitter()

  constructor(private renderer: Renderer, private cd: ChangeDetectorRef) {}

  public ngAfterViewInit(): void {
    const emailElm: HTMLInputElement = this.email.nativeElement
    // emailElm.setAttribute("placeholder", "Enter your email address")
    this.renderer.setElementAttribute(
      emailElm,
      "placeholder",
      "Enter your email address",
    )
    // emailElm.focus()
    this.renderer.invokeElementMethod(emailElm, "focus")
    // this.message.days = 30 // -> ERROR Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '28'. Current value: '30'
    if (this.message) {
      this.message.forEach((message) => {
        message.days = 29
      })
      this.cd.detectChanges()
    }
  }

  public ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => {
          this.showMessage = checked
        })
      })
    }
  }

  public rememberUser(remember: boolean) {
    this.rememberMe = remember
  }

  public onSubmit(value: User) {
    const rememberMe = this.rememberMe
    const loggable = { ...value, rememberMe }
    this.submitted.emit(loggable)
  }
}
