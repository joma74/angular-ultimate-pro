import { Http } from "@angular/http"
import { Observable } from "rxjs"
import { Product } from "../models/product.interface"
import { Stock } from "../models/stock.interface"
import { StockInventoryService } from "./stock-inventory.service"

export function stockInventoryServiceFactoryFunction(
  http: Http,
  apiCart: string,
  apiProducts: string,
  apiBranches: string,
): StockInventoryService {
  return new StockInventoryService(http, apiCart, apiProducts, apiBranches)
}

// tslint:disable:max-classes-per-file

export abstract class CartService {
  public getStock: () => Observable<Stock[]>
}

export abstract class ProductService {
  public getProducts: () => Observable<Product[]>
}

export abstract class BranchService {
  public checkBranchId: (id: string) => Observable<boolean>
}
