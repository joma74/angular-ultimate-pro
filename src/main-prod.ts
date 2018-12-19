/// <reference types="webpack-env" />

import { enableProdMode } from "@angular/core"
import { platformBrowser } from "@angular/platform-browser"

import { AppModule } from "./app/app.module"

enableProdMode()

platformBrowser()
  .bootstrapModule(AppModule)
  // tslint:disable-next-line:no-console
  .catch((err) => console.error(err))
