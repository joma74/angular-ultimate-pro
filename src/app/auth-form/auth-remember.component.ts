import { Component, EventEmitter, Input, Output } from "@angular/core"

let nextId = 0

@Component({
  selector: "auth-remember",
  template: `
    <div class="leading-by-font">
      <input
        class="w-3 h-3 mr-2 inline align-middle"
        [id]="id"
        type="checkbox"
        (change)="onChecked($event.target.checked)"
      />
      <label
        class="text-grey-darker font-bold inline align-middle text-sm"
        [for]="id"
      >
        Keep me logged in
      </label>
    </div>
  `,
})
export class AuthRememberComponent {
  @Input()
  public id = `remember-me-${nextId++}`

  @Output()
  public checked: EventEmitter<boolean> = new EventEmitter<boolean>()

  public onChecked(value: boolean) {
    this.checked.emit(value)
  }
}
