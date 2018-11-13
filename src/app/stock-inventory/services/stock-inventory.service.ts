import { Injectable } from "@angular/core"
import { Http, Response } from "@angular/http"
import { Observable } from "rxjs/Observable"
import { Product } from "../models/product.interface"
import { Stock } from "../models/stock.interface"

@Injectable()
export class StockInventoryService {
  constructor(private http: Http) {}

  public getStock(): Observable<Stock[]> {
    return this.http
      .get("/api/cart")
      .map((response: Response) => {
        return response.json()
      })
      .catch((error: any) => {
        return Observable.throw(error.json())
      })
  }

  public getProducts(): Observable<Product[]> {
    return this.http
      .get("/api/products")
      .map((response: Response) => {
        return response.json()
      })
      .catch((error: any) => {
        return Observable.throw(error.json())
      })
  }
}
