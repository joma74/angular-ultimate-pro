import { TestBed } from "@angular/core/testing"
import { Http, Response, ResponseOptions } from "@angular/http"
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from "@angular/platform-browser-dynamic/testing"
import { Observable } from "rxjs"
import { StockInventoryService } from "./stock-inventory.service"
import { API_TOKEN_BRANCHES, API_TOKEN_CART, API_TOKEN_PRODUCTS } from "./token"

describe("StockInventoryService", () => {
  let service: StockInventoryService
  let http: Http

  class MockHttp {
    public get() {
      return createResponse([])
    }
  }

  function createResponse(body: any[]) {
    return Observable.of(
      new Response(new ResponseOptions({ body: JSON.stringify(body) })),
    )
  }

  const stockItems = [
    { product_id: 1, quantity: 10 },
    { product_id: 2, quantity: 5 },
  ]
  const productItems = [
    { id: 10, price: 10, name: "Test" },
    { id: 2, price: 100, name: "Another Test" },
  ]

  beforeAll(() => {
    TestBed.resetTestEnvironment()
    TestBed.initTestEnvironment(
      BrowserDynamicTestingModule,
      platformBrowserDynamicTesting(),
    )
  })

  beforeEach(() => {
    const bed = TestBed.configureTestingModule({
      providers: [
        StockInventoryService,
        { provide: Http, useClass: MockHttp },
        { provide: API_TOKEN_BRANCHES, useValue: "/api/branches" },
        { provide: API_TOKEN_CART, useValue: "/api/cart" },
        { provide: API_TOKEN_PRODUCTS, useValue: "/api/products" },
      ],
    })
    http = bed.get(Http)
    service = bed.get(StockInventoryService)
  })

  it("should get cart items", () => {
    spyOn(http, "get").and.returnValue(createResponse([...stockItems]))
    service.getStock().subscribe((result) => {
      expect(result.length).toBe(2)
      expect(result).toEqual(stockItems)
    })
  })

  it("should get product items", () => {
    spyOn(http, "get").and.returnValue(createResponse([...productItems]))
    service.getProducts().subscribe((result) => {
      expect(result.length).toBe(2)
      expect(result).toEqual(productItems)
    })
  })
})
