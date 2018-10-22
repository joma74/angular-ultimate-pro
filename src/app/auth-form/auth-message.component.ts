import { Component } from "@angular/core"

@Component({
  selector: "auth-message",
  template: `
    <p class="italic text-sm text-grey mt-2">
        You will be logged in for {{days}} days
    </p>
    `,
})
export class AuthMessageComponent {
  public days: number = 7
}
