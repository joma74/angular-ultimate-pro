import { Component, OnInit } from "@angular/core"
import { NavigationEnd, Router } from "@angular/router"

@Component({
  selector: "main-app",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <header><img src="assets/images/logo.svg" /></header>
      <div class="app__content">
        <nav>
          <a
            [routerLink]="[
              '/mail',
              { outlets: { primary: 'folder/inbox', pane: null } }
            ]"
            routerLinkActive="active"
          >
            Inbox
          </a>
          <a
            [routerLink]="[
              '/mail',
              { outlets: { primary: 'folder/trash', pane: null } }
            ]"
            routerLinkActive="active"
          >
            Trash
          </a>
          <a [routerLink]="['/dashboard']" routerLinkActive="active">
            Dashboard
          </a>
        </nav>
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {}
  public ngOnInit() {
    this.router.events
      .filter((event) => event instanceof NavigationEnd)
      .subscribe((event) => {
        // tslint:disable-next-line:no-console
        console.log(event)
      })
  }
}
