import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from "@angular/core"

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: "stock-counter",
  template: `
    <div class="stock-counter">
      <div>
        <div
          (keydown)="onKeyUp($event)"
          (blur)="onBlur($event)"
          (focus)="onFocus($event)"
          tabindex="0"
        >
          <p>{{ value }}</p>
          <div tabindex="-1">
            <button
              type="button"
              tabindex="-1"
              (click)="increment()"
              [disabled]="value === max"
            >
              +
            </button>
            <button
              type="button"
              tabindex="-1"
              (click)="decrement()"
              [disabled]="value === min"
            >
              -
            </button>
          </div>
        </div>
      </div>
    </div>
  `,
})
export class StockCounterSimpleComponent {
  @Input() public step: number = 1
  @Input() public min: number = 0
  @Input() public max: number = 100

  @Output() public changed = new EventEmitter<number>()

  public value: number = 0
  public focused: boolean

  public increment() {
    if (this.value < this.max) {
      this.value = this.value + this.step
      this.changed.emit(this.value)
    }
  }

  public decrement() {
    if (this.value > this.min) {
      this.value = this.value - this.step
      this.changed.emit(this.value)
    }
  }

  public onBlur(event: FocusEvent) {
    this.focused = false
    event.preventDefault()
    event.stopPropagation()
  }

  public onKeyUp(event: KeyboardEvent) {
    const handlers = {
      ArrowDown: () => this.decrement(),
      ArrowUp: () => this.increment(),
    }

    if (handlers[event.code]) {
      handlers[event.code]()
      event.preventDefault()
      event.stopPropagation()
    }
  }

  public onFocus(event: FocusEvent) {
    this.focused = true
    event.preventDefault()
    event.stopPropagation()
  }
}
