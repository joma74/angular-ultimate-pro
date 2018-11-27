import { ComponentFixture, TestBed } from "@angular/core/testing"
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing"
import { StockCounterComponent } from "./stock-counter.component"

xdescribe("StockCounterComponent", () => {
  let component: StockCounterComponent

  let fixture: ComponentFixture<StockCounterComponent>

  beforeAll(() => {
    TestBed.resetTestEnvironment()
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting(),
    )
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockCounterComponent],
    })

    fixture = TestBed.createComponent(StockCounterComponent)

    component = fixture.componentInstance

    component.value = 0
  })

  it("should increment correctly", () => {
    fixture.detectChanges()
    component.increment()
    expect(component.value).toBe(1)
  })
})
