/// <reference types="webpack-env" />

import { enableProdMode } from "@angular/core"
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"

import { AppModule } from "./app/app.module"

declare var module: __WebpackModuleApi.Module

if (process.env.ENV === "production") {
  enableProdMode()
} else {
  // Enables Hot Module Replacement.
  if (module.hot) {
    module.hot.accept()
  }
}

platformBrowserDynamic().bootstrapModule(AppModule)
