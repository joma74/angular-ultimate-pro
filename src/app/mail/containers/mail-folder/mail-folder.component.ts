import { Component } from "@angular/core"

import { Mail } from "../../models/mail.interface"

@Component({
  selector: "mail-folder",
  styleUrls: ["mail-folder.component.scss"],
  template: `
    <h2>Inbox</h2>
    <mail-item *ngFor="let message of messages" [message]="message">
    </mail-item>
  `,
})
export class MailFolderComponent {
  public messages: Mail[] = [
    {
      folder: "inbox",
      from: "Jane Smith",
      id: 1,
      summary:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur lobortis, neque at ultricies fringilla, ligula metus",
      timestamp: 1487848162905,
    },
  ]
}
