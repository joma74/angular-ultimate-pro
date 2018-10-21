import {
  AfterContentInit,
  Component,
  ContentChild,
  EventEmitter,
  Output,
} from "@angular/core"

import { User } from "./auth-form.interface"
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
			<p *ngIf="showMessage" class="italic text-sm text-grey mt-2">
				You will be logged in for 30 days
			</p>
		</div>
		<div class="no-m-coll"></div>
		<div class="mt-4">
			<ng-content select="button"></ng-content>
		</div>
      </form>
    </div>
  `,
})
export class AuthFormComponent implements AfterContentInit {
  public showMessage: boolean

  @ContentChild(AuthRememberComponent)
  public remember: AuthRememberComponent

  @Output()
  public submitted: EventEmitter<User> = new EventEmitter<User>()

  public ngAfterContentInit(): void {
    if (this.remember) {
      this.remember.checked.subscribe((checked: boolean) => {
        this.showMessage = checked
      })
    }
  }

  public onSubmit(value: User) {
    this.submitted.emit(value)
  }
}
