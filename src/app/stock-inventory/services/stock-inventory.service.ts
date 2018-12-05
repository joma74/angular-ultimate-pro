import { Inject, Injectable } from "@angular/core"
import { Http, Response, URLSearchParams } from "@angular/http"
import { Observable } from "rxjs/Observable"
import { Product } from "../models/product.interface"
import { Stock } from "../models/stock.interface"
import { API_TOKEN_BRANCHES, API_TOKEN_CART, API_TOKEN_PRODUCTS } from "./token"

@Injectable()
export class StockInventoryService {
  constructor(
    private http: Http,
    @Inject(API_TOKEN_CART) private apiCart: string,
    @Inject(API_TOKEN_PRODUCTS) private apiProducts: string,
    @Inject(API_TOKEN_BRANCHES) private apiBranches: string,
  ) {}

  public getStock(): Observable<Stock[]> {
    return this.http
      .get(this.apiCart)
      .map((response: Response) => {
        return response.json()
      })
      .catch((error: any) => {
        return Observable.throw(error.json())
      })
  }

  public getProducts(): Observable<Product[]> {
    return this.http
      .get(this.apiProducts)
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
      .get(this.apiBranches, { search })
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
