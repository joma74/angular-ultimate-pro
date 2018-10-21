import { Component, EventEmitter, Output } from "@angular/core"

@Component({
  selector: "auth-remember",
  template: `
	<div class="leading-by-font">
		<input class="w-3 h-3 mr-2 inline align-middle"
			id="remember-me" 
			type="checkbox"
			(change)="onChecked($event.target.checked)"
		>
		<label class="text-grey font-bold inline align-middle text-sm"
			for="remember-me"
		>
			Keep me logged in
		</label>
	</div>
  `,
})
export class AuthRememberComponent {
  @Output()
  public checked: EventEmitter<boolean> = new EventEmitter<boolean>()

  public onChecked(value: boolean) {
    this.checked.emit(value)
  }
}
