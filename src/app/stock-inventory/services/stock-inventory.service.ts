import { Injectable } from "@angular/core"
import { Http, Response, URLSearchParams } from "@angular/http"
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

  public checkBranchId(id: string): Observable<boolean> {
    const search = new URLSearchParams()
    search.set("id", id)
    return this.http
      .get("/api/branches", { search })
      .map((response: Response) => {
        return response.json()
      })
      .map((response: any) => {
        return !!response.length
      })
      .catch((error: any) => {
        return Observable.throw(error.json())
      })
  }
}
