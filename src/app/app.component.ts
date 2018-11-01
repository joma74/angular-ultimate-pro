import { Component } from "@angular/core"

import "../assets/css/styles.css"

@Component({
  selector: "main-app",
  template: `
    <div class="container mx-auto bg-grey-lighter mt-10 p-8 shadow-md">
        <ng-container [ngTemplateOutlet]="tmpl">
        </ng-container>
        <ng-template #tmpl>
            Tedd Motto : England, UK
        </ng-template>
    </div>
  `,
})
export class AppComponent {}
