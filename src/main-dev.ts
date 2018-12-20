/// <reference types="webpack-env" />

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"

import { ApplicationRef, NgModuleRef } from "@angular/core"
import { enableDebugTools } from "@angular/platform-browser"
import { AppModule } from "./app"
import { ROOT_SELECTOR } from "./app/app.component"

declare var module: __WebpackModuleApi.Module

/**
 * Bootstrap Angular app with a top level NgModule
 */
export function main(): Promise<any> {
  let modulePromise: Promise<NgModuleRef<AppModule>> = null

  // Enables Hot Module Replacement.
  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => {
      // Before restarting the app, we create a new root element and dispose the old one
      const oldRootElem = document.querySelector(ROOT_SELECTOR)
      const newRootElem = document.createElement(ROOT_SELECTOR)
      oldRootElem!.parentNode!.insertBefore(newRootElem, oldRootElem)
      if (modulePromise) {
        modulePromise.then((appModule) => {
          appModule.destroy()
          if (oldRootElem !== null && oldRootElem.parentNode != null) {
            oldRootElem.parentNode.removeChild(oldRootElem)
          }
          return appModule
        })
      }
    })
  }

  modulePromise = platformBrowserDynamic().bootstrapModule(AppModule)

  return (
    modulePromise
      .then(decorateModuleRef)
      // tslint:disable-next-line:no-console
      .catch((err) => console.error(err))
  )
}

/**
 * Needed for hmr
 * in prod this is replace for document ready
 */
switch (document.readyState) {
  case "loading":
    document.addEventListener("DOMContentLoaded", _domReadyHandler, false)
    break
  case "interactive":
  case "complete":
  default:
    main()
}

function _domReadyHandler() {
  document.removeEventListener("DOMContentLoaded", _domReadyHandler, false)
  main()
}

function decorateModuleRef(modRef: NgModuleRef<any>): NgModuleRef<any> {
  Error.stackTraceLimit = Infinity
  // tslint:disable-next-line:no-var-requires
  require("zone.js/dist/long-stack-trace-zone")
  const appRef = modRef.injector.get(ApplicationRef)
  const cmpRef = appRef.components[0]

  const _ng = (window as any).ng
  enableDebugTools(cmpRef)
  ;(window as any).ng.probe = _ng.probe
  ;(window as any).ng.coreTokens = _ng.coreTokens
  return modRef
}
