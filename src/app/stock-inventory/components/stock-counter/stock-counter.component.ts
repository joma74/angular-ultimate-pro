import { Component, Input } from "@angular/core"

@Component({
  selector: "stock-counter",
  styleUrls: ["stock-counter.component.scss"],
  template: `
    <div class="stock-counter">
      <div>
        <div>
          <p>{{ value }}</p>
          <div>
            <button
              type="button"
              [disabled]="value === max"
              (click)="increment()"
            >
              +</button
            ><button
              type="button"
              [disabled]="value === min"
              (click)="decrement()"
            >
              -
            </button>
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
  public max: number = 1000

  public value: number = 10

  public increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step
    }
  }

  public decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step
    }
  }
}
