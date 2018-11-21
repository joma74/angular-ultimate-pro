import { Component } from "@angular/core"

@Component({
  selector: "dashboard-app",
  styleUrls: ["dashboard.component.scss"],
  template: `
    <div>
      <h1>Dashboard</h1>
      <router-outlet
        (activate)="onActivate($event)"
        (deactivate)="onDeactivate($event)"
      ></router-outlet>
    </div>
  `,
})
export class DashboardComponent {
  public onActivate(event: any) {
    // tslint:disable-next-line:no-console
    console.log("Activate:", event)
  }

  public onDeactivate(event: any) {
    // tslint:disable-next-line:no-console
    console.log("Deactivate:", event)
  }
}
