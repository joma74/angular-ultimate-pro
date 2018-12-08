import { Http } from "@angular/http"
import { StockInventoryService } from "../../services/stock-inventory.service"

export function stockInventoryServiceFactoryFunction(
  http: Http,
  apiCart: string,
  apiProducts: string,
  apiBranches: string,
): StockInventoryService {
  return new StockInventoryService(http, apiCart, apiProducts, apiBranches)
}
