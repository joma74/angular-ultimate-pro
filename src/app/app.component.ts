import { Component } from "@angular/core"

import "../assets/css/styles.css"

@Component({
  selector: "main-app",
  template: `
    <div class="container mx-auto bg-grey-lighter mt-10 p-8 shadow-md">
      <ng-container [ngTemplateOutlet]="tmpl" [ngTemplateOutletContext]="ctx">
      </ng-container>
      <ng-template #tmpl let-name let-location="location">
        {{ name }} : {{ location }}
      </ng-template>
    </div>
  `,
})
export class AppComponent {
  public ctx = {
    $implicit: "Tedd Motto",
    location: "England, UK",
  }
}
