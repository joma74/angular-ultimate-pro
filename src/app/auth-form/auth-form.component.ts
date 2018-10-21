import { Component, EventEmitter, Output } from "@angular/core"

import { User } from "./auth-form.interface"

@Component({
  selector: "auth-form",
  template: `
	<div class="no-m-coll">
	  <form (ngSubmit)="onSubmit(form.value)" #form="ngForm">
		<h3>My Form</h3>
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
		<div class="mt-8">
			<button class="bg-purple hover:bg-purple-dark text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" 
				type="submit">
				Submit
			</button>
		</div>
      </form>
    </div>
  `,
})
export class AuthFormComponent {
  @Output()
  public submitted: EventEmitter<User> = new EventEmitter<User>()

  public onSubmit(value: User) {
    this.submitted.emit(value)
  }
}
