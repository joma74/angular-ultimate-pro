import { DebugElement } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser"
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing"
import { StockCounterSimpleComponent } from "./stock-counter-simple.component"

describe("StockCounterSimpleComponent", () => {
  let component: StockCounterSimpleComponent

  // A fixture is a wrapper for a component and it’s template.
  let fixture: ComponentFixture<StockCounterSimpleComponent>

  let el: DebugElement

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

    el = fixture.debugElement

    component.value = 0
  })

  it("should increment when the + button is clicked", () => {
    el.query(By.css("button:first-child")).triggerEventHandler("click", null)
    fixture.detectChanges()
    expect(component.value).toBe(1)
    expect(el.query(By.css("p")).nativeElement.textContent).toBe("1")
  })

  it("should increment when the up arrow is pressed", () => {
    const event = new KeyboardEvent("KeyboardEvent", { code: "ArrowUp" })
    el.query(By.css(".stock-counter > div > div")).triggerEventHandler(
      "keydown",
      event,
    )
    fixture.detectChanges()
    expect(component.value).toBe(1)
    expect(el.query(By.css("p")).nativeElement.textContent).toBe("1")
  })
})
