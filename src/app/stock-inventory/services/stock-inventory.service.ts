import { Inject, Injectable } from "@angular/core"
import { Http, Response, URLSearchParams } from "@angular/http"
import { Observable } from "rxjs/Observable"
import { Product } from "../models/product.interface"
import { Stock } from "../models/stock.interface"

@Injectable()
export class StockInventoryService {
  constructor(
    private http: Http,
    @Inject("apiCart") private apiCart: string,
    @Inject("apiProducts") private apiProducts: string,
    @Inject("apiBranches") private apiBranches: string,
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
