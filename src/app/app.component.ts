import { ChangeDetectionStrategy, Component } from "@angular/core"

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: "main-app",
  template: `
    <div>
      <button (click)="addProp()">Add property to user</button>
      <button (click)="changeUser()">Change user object</button>
      <button (click)="changeName()">Change name property</button>
      <div class="users">
        <example-one [user]="user"></example-one>
        <example-two [user]="user"></example-two>
      </div>
    </div>
  `,
})
export class AppComponent {
  public user: any = {
    age: 44,
    location: "California",
    name: "Mark Hoppus",
  }

  public addProp() {
    this.user.email = "blink@blink-182.net"
  }

  public changeName() {
    this.user.name = "Travis Barker"
  }

  public changeUser() {
    this.user = {
      age: 41,
      location: "California",
      name: "Tom Delonge",
    }
  }
}
