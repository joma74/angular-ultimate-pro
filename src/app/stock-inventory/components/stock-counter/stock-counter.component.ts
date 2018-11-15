import { Component, Input } from "@angular/core"

@Component({
  selector: "stock-counter",
  styleUrls: ["stock-counter.component.scss"],
  template: `
    <div>
      <div>
        <div>
          <p>{{ value }}</p>
          <div>
            <button type="button" (click)="increment()">+</button
            ><button type="button" (click)="decrement()">-</button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class StockCounterComponent {
  @Input()
  public step: number = 10

  @Input()
  public min: number = 10

  @Input()
  public max: number = 100

  public value: number = 0

  public increment() {}

  public decrement() {}
}
