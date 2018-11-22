import { Component, OnInit } from "@angular/core"
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
    <div class="mail-reply">
      <textarea
        (change)="updateReply($event.target.value)"
        placeholder="Type your reply..."
        [value]="reply"
      >
      </textarea>
      <button type="button" (click)="sendReply()">Send</button>
    </div>
  `,
})
export class MailViewComponent implements OnInit {
  public message: Observable<Mail> = this.route.data.pluck("message")

  public reply: string = ""

  public hasUnsavedChanges: boolean = false

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.route.params.subscribe(() => {
      this.reply = ""
      this.hasUnsavedChanges = false
    })
  }

  public updateReply(value: string) {
    this.reply = value
    this.hasUnsavedChanges = true
  }

  public sendReply() {
    // tslint:disable-next-line:no-console
    console.log("Sent!", this.reply)
    this.hasUnsavedChanges = false
  }
}
