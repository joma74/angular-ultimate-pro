import {
  AfterContentInit,
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Output,
  QueryList,
  ViewChild,
} from "@angular/core"

import { User } from "./auth-form.interface"
import { AuthMessageComponent } from "./auth-message.component"
import { AuthRememberComponent } from "./auth-remember.component"

@Component({
  selector: "auth-form",
  template: `
	<div class="no-m-coll">
	  <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
		<ng-content select="h3"></ng-content>
		<div class="mt-4">
			<label class="block text-grey-darker text-sm font-bold mb-2">
				Email address
			</label>
			<input class="shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker leading-tight focus:outline-none focus:shadow-outline" 
				type="email" 
				name="email" 
			ngModel>
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
			<ng-content select="auth-remember"></ng-content>
            <auth-message 
                [style.display]="(showMessage ? 'inherit' : 'none')">
            </auth-message>
		</div>
		<div class="no-m-coll"></div>
		<div class="mt-4">
			<ng-content select="button"></ng-content>
		</div>
      </form>
    </div>
  `,
})
export class AuthFormComponent implements AfterContentInit, AfterViewInit {
  public showMessage: boolean

  @ViewChild(AuthMessageComponent)
  public message: AuthMessageComponent

  @ContentChildren(AuthRememberComponent)
  public remember: QueryList<AuthRememberComponent>

  @Output()
  public submitted: EventEmitter<User> = new EventEmitter<User>()

  public ngAfterViewInit(): void {
    // tslint:disable-next-line:no-console
    // this.message.days = 30 // -> ERROR Error: ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value: '28'. Current value: '30'
  }

  public ngAfterContentInit(): void {
    if (this.message) {
      this.message.days = 28
    }
    if (this.remember) {
      this.remember.forEach((item) => {
        item.checked.subscribe((checked: boolean) => {
          this.showMessage = checked
        })
      })
    }
  }

  public onSubmit(value: User) {
    this.submitted.emit(value)
  }
}
