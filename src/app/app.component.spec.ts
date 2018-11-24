import { Component } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing"

describe("Default suite", () => {
  describe("Shallow Any test", () => {
    @Component({
      template: `
        <div>aString: {{ aString }}</div>
        <div>aNumber: {{ aNumber }}</div>
      `,
    })
    class TestComponent {
      public aString = "abcdef"
      public aNumber = 123456
    }

    let component: TestComponent
    let fixture: ComponentFixture<TestComponent>
    let el: HTMLElement

    beforeAll(() => {
      TestBed.resetTestEnvironment()
      TestBed.initTestEnvironment(
        BrowserDynamicTestingModule,
        platformBrowserDynamicTesting(),
      )
    })

    beforeEach(() => {
      TestBed.configureTestingModule({
        declarations: [TestComponent],
      })
      fixture = TestBed.createComponent(TestComponent)
      component = fixture.componentInstance
      el = fixture.nativeElement
    })

    it("should display a string and a number", () => {
      fixture.detectChanges()
      expect(el.textContent).toContain("aString: abcdef")
      expect(el.textContent).toContain("aNumber: 123456")
      component.aString = "fedcba"
      component.aNumber = 654321
      fixture.detectChanges()
      expect(el.textContent).toContain("aString: fedcba")
      expect(el.textContent).toContain("aNumber: 654321")
    })
  })

  describe("Isolate Any test", () => {
    it("should equal true to true", () => {
      expect(true).toBe(true)
    })
  })
})
