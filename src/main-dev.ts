/// <reference types="webpack-env" />

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"

import { AppModule } from "./app/app.module"

declare var module: __WebpackModuleApi.Module

// Enables Hot Module Replacement.
if (module.hot) {
  module.hot.accept()
}

platformBrowserDynamic().bootstrapModule(AppModule)
