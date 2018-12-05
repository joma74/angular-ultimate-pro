import { Component, DebugElement } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { By } from "@angular/platform-browser"
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing"
import { CreditCardDirective } from "./credit-card.directive"

@Component({
  template: `
  <input type="text" [value]="value" credit-card>
  `,
})
class TestComponent {
  public value = 123456
}

describe("Credit Card Directive", () => {
  let fixture: ComponentFixture<TestComponent>

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
      declarations: [CreditCardDirective, TestComponent],
    })

    fixture = TestBed.createComponent(TestComponent)

    el = fixture.debugElement
  })

  it("should format two group with spaces", () => {
    const directive = el.query(By.directive(CreditCardDirective))
      .nativeElement as HTMLInputElement
    directive.value = "475123"
    directive.dispatchEvent(new Event("input"))
    expect(directive.value).toBe("4751 23")
  })

  it("should format four groups with spaces", () => {
    const directive = el.query(By.directive(CreditCardDirective))
      .nativeElement as HTMLInputElement
    directive.value = "4751239812093883"
    directive.dispatchEvent(new Event("input"))
    expect(directive.value).toBe("4751 2398 1209 3883")
  })

  it("should have a max-length of 16 characters", () => {
    const directive = el.query(By.directive(CreditCardDirective))
      .nativeElement as HTMLInputElement
    directive.value = "47512398120938834751239812093883"
    directive.dispatchEvent(new Event("input"))
    expect(directive.value).toBe("4751 2398 1209 3883")
  })
})
