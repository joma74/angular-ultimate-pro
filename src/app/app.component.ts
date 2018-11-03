import { Component } from "@angular/core"

import "../assets/css/styles.css"

@Component({
  selector: "main-app",
  template: `
    <div class="container mx-auto bg-grey-lighter mt-10 p-8 shadow-md">
        <div class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <label class="block text-xl">
                Credit Card Number
                <input
                    class="w-full appearance-none focus:outline-none border-2 rounded mt-4 py-2 px-3 border-grey leading-tight"
                    name="credit-card"
                    type="text"
                    placeholder="Enter your 16-digit card number"
                    credit-card
                >
            </label>
            <div class="no-m-coll"></div>
            <label class="block text-xl mt-6" 
            >
                Security Code
                <span
                    tooltip="3 digits, back of your card"
                    #myTooltip="tooltip"
                    (mouseover)="myTooltip.show()"
                    (mouseout)="myTooltip.hide()"
                >(?)</span>
                <input 
                    class="w-full appearance-none focus:outline-none border-2 rounded mt-4 py-2 px-3 border-grey leading-tight"
                    type="text"
                    placeholder="Enter your security code"
                >
            </label>
        </div>
    </div>
  `,
})
export class AppComponent {}
