import { enableProdMode } from "@angular/core"
import { platformBrowser } from "@angular/platform-browser"
import "zone.js/dist/zone"

import { AppModule } from "./app"

enableProdMode()

platformBrowser()
  .bootstrapModule(AppModule)
  // tslint:disable-next-line:no-console
  .catch((err) => console.error(err))
