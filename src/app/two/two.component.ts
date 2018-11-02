import { ChangeDetectionStrategy, Component, Input } from "@angular/core"

@Component({
  changeDetection: ChangeDetectionStrategy.Default,
  selector: "example-two",
  styles: [
    `
      .example-two {
        font-size: 19px;
        margin-bottom: 10px;
      }
    `,
  ],
  template: `
    <div class="example-two">
      <h4>{{ user.name }}</h4>
      <h5>{{ user.age }} years old</h5>
      {{ user.location }} <br />
      {{ user.email }}
      
      <button (click)="update()">Internal update</button>
      <p>* should update</p>
    </div>
  `,
})
export class ExampleTwoComponent {
  @Input()
  public user: any

  public update() {
    this.user.name = "Scott Raynor"
  }
}
