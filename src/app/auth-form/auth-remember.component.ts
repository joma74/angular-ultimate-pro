import { Component, EventEmitter, Output } from "@angular/core"

@Component({
  selector: "auth-remember",
  template: `
	<label>
		<input type="checkbox"
			(change)="onChecked($event.target.checked)"
		>
		Keep me logged in
	</label>
  `,
})
export class AuthRememberComponent {
  @Output()
  public checked: EventEmitter<boolean> = new EventEmitter<boolean>()

  public onChecked(value: boolean) {
    this.checked.emit(value)
  }
}
