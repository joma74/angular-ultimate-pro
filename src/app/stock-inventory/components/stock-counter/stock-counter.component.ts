import { Component, forwardRef, Input, Provider } from "@angular/core"
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms"

const COUNTER_CONTROL_ACCESSOR: Provider = {
  multi: true,
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => StockCounterComponent),
}

@Component({
  providers: [COUNTER_CONTROL_ACCESSOR],
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
export class StockCounterComponent implements ControlValueAccessor {
  @Input()
  public step: number = 10

  @Input()
  public min: number = 10

  @Input()
  public max: number = 1000

  public value: number = 10

  private onTouch: () => void

  private onModelChange: (value: any) => void

  public writeValue(value: any): void {
    this.value = value || 0
  }

  public registerOnChange(fn: any): void {
    this.onModelChange = fn
  }

  public registerOnTouched(fn: any): void {
    this.onTouch = fn
  }

  public increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step
      this.onModelChange(this.value)
    }
    this.onTouch()
  }

  public decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step
      this.onModelChange(this.value)
    }
    this.onTouch()
  }
}
