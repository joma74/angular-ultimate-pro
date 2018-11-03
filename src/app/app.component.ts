import { Component } from "@angular/core"

import "../assets/css/styles.css"

@Component({
  selector: "main-app",
  template: `
    <div class="container mx-auto bg-grey-lighter mt-10 p-8 shadow-md">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label class="text-xl">
                Credit Card Number
                <input
                    class="w-full appearance-none focus:outline-none border-2 rounded mt-4 py-2 px-3 border-grey leading-tight"
                    name="credit-card"
                    type="text"
                    placeholder="Enter your 16-digit card number"
                    credit-card
                >
            </label>
        </div>
    </div>
  `,
})
export class AppComponent {}
