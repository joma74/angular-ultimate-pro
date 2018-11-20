import { Component } from "@angular/core"
import { ActivatedRoute } from "@angular/router"
import { Observable } from "rxjs"
import { Mail } from "../../models/mail.interface"

@Component({
  selector: "mail-view",
  styleUrls: ["mail-view.component.scss"],
  template: `
    <div class="mail-view">
      <h2>{{ (message | async).from }}</h2>
      <p>{{ (message | async).summary }}</p>
    </div>
  `,
})
export class MailViewComponent {
  public message: Observable<Mail> = this.route.data.pluck("message")

  constructor(private route: ActivatedRoute) {}
}
