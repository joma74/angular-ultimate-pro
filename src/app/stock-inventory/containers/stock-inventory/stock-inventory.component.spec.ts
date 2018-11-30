import { DebugElement } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ReactiveFormsModule } from "@angular/forms"
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing"
import { Observable } from "rxjs"
import { StockBranchComponent } from "../../components/stock-branch/stock-branch.component"
import { StockCounterComponent } from "../../components/stock-counter/stock-counter.component"
import { StockProductsComponent } from "../../components/stock-products/stock-products.component"
import { StockSelectorComponent } from "../../components/stock-selector/stock-selector.component"
import { Product } from "../../models/product.interface"
import { Stock } from "../../models/stock.interface"
import { StockInventoryService } from "../../services/stock-inventory.service"
import { StockInventoryComponent } from "./stock-inventory.component"

describe("StockInventoryComponent", () => {
  let component: StockInventoryComponent

  let fixture: ComponentFixture<StockInventoryComponent>

  let el: DebugElement

  let service: StockInventoryService

  beforeAll(() => {
    TestBed.resetTestEnvironment()
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting(),
    )
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        StockInventoryComponent,
        StockBranchComponent,
        StockCounterComponent,
        StockProductsComponent,
        StockSelectorComponent,
      ],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: StockInventoryService, useClass: MockStoreInventoryService },
      ],
    })

    fixture = TestBed.createComponent(StockInventoryComponent)

    component = fixture.componentInstance

    el = fixture.debugElement

    service = el.injector.get(StockInventoryService)
  })

  class MockStoreInventoryService {
    public getStock(): Observable<Stock[]> {
      return Observable.of([
        { product_id: 1, quantity: 10 },
        { product_id: 2, quantity: 5 },
      ])
    }

    public getProducts(): Observable<Product[]> {
      return Observable.of([
        { id: 1, price: 10, name: "Test" },
        { id: 2, price: 100, name: "Another Test" },
      ])
    }
  }

  it("should get cart items and products on init", () => {
    spyOn(service, "getStock").and.callThrough()
    spyOn(service, "getProducts").and.callThrough()
    fixture.detectChanges()
    expect(service.getStock).toHaveBeenCalled()
    expect(service.getProducts).toHaveBeenCalled()
  })

  it("should create a product map from the service", () => {
    fixture.detectChanges()
    expect(component.productMap.get(1)).toEqual({
      id: 1,
      name: "Test",
      price: 10,
    })
    expect(component.productMap.get(2)).toEqual({
      id: 2,
      name: "Another Test",
      price: 100,
    })
  })

  it("should store the product reponse", () => {
    fixture.detectChanges()
    expect(component.products).toEqual([
      { id: 1, price: 10, name: "Test" },
      { id: 2, price: 100, name: "Another Test" },
    ])
  })

  it("should create a stock item for each cart item", () => {
    spyOn(component, "addStock")
    fixture.detectChanges()
    expect(component.addStock).toHaveBeenCalledWith({
      product_id: 1,
      quantity: 10,
    })
    expect(component.addStock).toHaveBeenCalledWith({
      product_id: 2,
      quantity: 5,
    })
  })
})
