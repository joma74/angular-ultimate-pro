import { DebugElement, NO_ERRORS_SCHEMA } from "@angular/core"
import { ComponentFixture, TestBed } from "@angular/core/testing"
import { ReactiveFormsModule } from "@angular/forms"
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing"
import { Observable } from "rxjs"
import { Product } from "../../models/product.interface"
import { Stock } from "../../models/stock.interface"
import { StockInventoryService } from "../../services/stock-inventory.service"
import {
  BranchService,
  CartService,
  ProductService,
} from "../../services/stock-inventory.service.factory"
import { StockInventoryComponent } from "./stock-inventory.component"

describe("StockInventoryComponent", () => {
  let component: StockInventoryComponent

  let fixture: ComponentFixture<StockInventoryComponent>

  let el: DebugElement

  let inventoryService: StockInventoryService
  let cartService: CartService
  let productService: ProductService

  beforeAll(() => {
    TestBed.resetTestEnvironment()
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting(),
    )
  })

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StockInventoryComponent],
      imports: [ReactiveFormsModule],
      providers: [
        { provide: StockInventoryService, useClass: MockStoreInventoryService },
      ],
      schemas: [NO_ERRORS_SCHEMA],
    })

    TestBed.overrideComponent(StockInventoryComponent, {
      set: {
        providers: [
          {
            provide: StockInventoryService,
            useClass: MockStoreInventoryService,
          },
          {
            provide: CartService,
            useExisting: StockInventoryService,
          },
          {
            provide: ProductService,
            useExisting: StockInventoryService,
          },
          {
            provide: BranchService,
            useExisting: StockInventoryService,
          },
        ],
      },
    })

    fixture = TestBed.createComponent(StockInventoryComponent)

    component = fixture.componentInstance

    el = fixture.debugElement

    inventoryService = el.injector.get(StockInventoryService)
    cartService = el.injector.get(CartService)
    productService = el.injector.get(ProductService)
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

  it("should get cart items and products on init with inventoryService partial interfaces(BranchService, CartService, ProductService)", () => {
    spyOn(cartService, "getStock").and.callThrough()
    spyOn(productService, "getProducts").and.callThrough()
    fixture.detectChanges()
    expect(cartService.getStock).toHaveBeenCalled()
    expect(productService.getProducts).toHaveBeenCalled()
  })

  it("should get cart items and products on init with inventoryService interface", () => {
    spyOn(inventoryService, "getStock").and.callThrough()
    spyOn(inventoryService, "getProducts").and.callThrough()
    fixture.detectChanges()
    expect(inventoryService.getStock).toHaveBeenCalled()
    expect(inventoryService.getProducts).toHaveBeenCalled()
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

  it("should store the product response", () => {
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
