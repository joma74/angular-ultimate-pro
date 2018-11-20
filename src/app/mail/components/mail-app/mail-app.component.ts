import { Component } from "@angular/core"

@Component({
  selector: "mail-app",
  styleUrls: ["mail-app.component.scss"],
  template: `
    <div class="mail">
      <router-outlet
        (activate)="onActivate($event)"
        (deactivate)="onDeactivate($event)"
      ></router-outlet>
    </div>
  `,
})
export class MailAppComponent {
  public onActivate(event: any) {
    console.log("Activate:", event)
  }

  public onDeactivate(event: any) {
    console.log("Deactivate:", event)
  }
}
