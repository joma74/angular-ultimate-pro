import { ComponentFixture, TestBed } from "@angular/core/testing"
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing"
import { StockCounterSimpleComponent } from "./stock-counter-simple.component"

describe("StockCounterSimpleComponent", () => {
  let component: StockCounterSimpleComponent

  // A fixture is a wrapper for a component and it’s template.
  let fixture: ComponentFixture<StockCounterSimpleComponent>

  beforeAll(() => {
    TestBed.resetTestEnvironment()
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting(),
    )
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockCounterSimpleComponent],
    })

    // create component and test fixture
    fixture = TestBed.createComponent(StockCounterSimpleComponent)

    // get test component from the fixture
    component = fixture.componentInstance

    component.value = 0
  })

  it("should increment correctly", () => {
    component.increment()
    expect(component.value).toBe(1)
  })

  it("should decrement correctly", () => {
    component.value = 1
    component.decrement()
    expect(component.value).toBe(0)
  })

  it("should not decrement below the minimum value", () => {
    component.decrement()
    expect(component.value).toBe(0)
  })

  it("should not increment above the maximum value", () => {
    component.value = 100
    component.increment()
    expect(component.value).toBe(100)
  })

  it("should call the output on a value change", () => {
    spyOn(component.changed, "emit").and.callThrough()
    component.step = 100
    component.increment()
    expect(component.changed.emit).toHaveBeenCalledTimes(1)
    expect(component.changed.emit).toHaveBeenCalledWith(100)
  })
})
