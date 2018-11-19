import { Component, OnInit } from "@angular/core"

@Component({
  selector: "main-app",
  styleUrls: ["app.component.scss"],
  template: `
    <div class="app">
      <header><img src="assets/images/logo.svg" /></header>
      <div class="app__content">
        <nav>
          <a routerLink="folder/inbox" routerLinkActive="active"> Inbox </a>
          <a routerLink="folder/trash" routerLinkActive="active"> Trash </a>
        </nav>
        <mail-app></mail-app>
      </div>
    </div>
  `,
})
export class AppComponent implements OnInit {
  // constructor(private router: Router) {}
  // tslint:disable-next-line:no-empty
  public ngOnInit() {}
}
