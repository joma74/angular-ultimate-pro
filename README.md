# Angular Ultimate Pro

[![Dependabot Status](https://api.dependabot.com/badges/status?host=github&repo=joma74/angular-ultimate-pro)](https://dependabot.com) [![Build Status](https://travis-ci.org/joma74/angular-ultimate-pro.svg?branch=master)](https://travis-ci.org/joma74/angular-ultimate-pro)

## Using

- angular js ~4
- @ngtools/webpack@1.10.2 corr. angular-cli@1.7.4
- @angular/compiler-cli@4.4.6 corr. --
- typescript ~3
- webapck ~3
- karma ~1
- testcafe

## Unresolved

- #1 webpack issues different chunkhashes for entries per installation. May be due to absolute module paths. See
  > Note: Webpack could generate a different hash even if the bundle stays the same – e.g. if you rename a file or compile the bundle under a different OS. This is a bug, and there’s no clear solution yet. See the discussion on GitHub https://github.com/webpack/webpack/issues/1479.
  - on `Workstation` they stay the same
  - on `Travis` they stay the same
  - But inbetween they are different (`/home/joma/entwicklung/nodews/angular-ultimate-pro/` vs `/home/travis/build/joma74/angular-ultimate-pro/`).

## Build Stats

- webpack prod config uses HashedModuleIdsPlugin, which allows for shorter module ids e.g. `[IckW] ./src/assets/css/styles.css 41 bytes {app} [built]`
- webpack dev config uses NamedModulesPlugin, which generates module ids after the module's resource path and name e.g. `[./node_modules/@angular/core/@angular/core.es5.js] ./node_modules/@angular/core/@angular/core.es5.js 492 kB {angular-chunk} [built]`

### Workstation

```
Version: webpack 3.12.0
Child
    Hash: f7c088
    Time: 13813ms
    PublicPath: /
                                  Asset       Size  Chunks                    Chunk Names
      assets/images//angular.9db278.png    2.38 kB          [emitted]
                   rxjs-chunk.f9ed5f.js      28 kB       0  [emitted]         rxjs-chunk
                          app.596ce8.js    3.27 kB       1  [emitted]         app
                    polyfills.62a64b.js   52 bytes       2  [emitted]         polyfills
                angular-chunk.5d3b50.js     267 kB       3  [emitted]  [big]  angular-chunk
                  tslib-chunk.c3ed0a.js  370 bytes       4  [emitted]         tslib-chunk
                   wp-runtime.3b9c96.js    1.03 kB       5  [emitted]         wp-runtime
              assets/css/app.022751.css    2.77 kB       1  [emitted]         app
                             index.html    1.23 kB          [emitted]
    ./../target/webpack-prod-stats.json    0 bytes          [emitted]
    Entrypoint app [big] = wp-runtime.3b9c96.js rxjs-chunk.f9ed5f.js tslib-chunk.c3ed0a.js angular-chunk.5d3b50.js app.596ce8.js assets/css/app.022751.css
    Entrypoint polyfills = wp-runtime.3b9c96.js polyfills.62a64b.js
    chunk    {0} rxjs-chunk.f9ed5f.js (rxjs-chunk) 90.4 kB {5} [initial] [rendered]
     [+3eL] ./node_modules/rxjs/util/tryCatch.js 422 bytes {0} [depth 4] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./util/tryCatch [B00U] ./node_modules/rxjs/Subscription.js 5:17-43
            [] -> factory:20ms building:6ms dependencies:0ms = 26ms
     [+ayw] ./node_modules/rxjs/operator/share.js 1.15 kB {0} [depth 2] [built]
            [only some exports used: share]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            harmony import rxjs/operator/share [3j3K] ./node_modules/@angular/core/@angular/core.es5.js 9:0-44
            [] -> factory:11ms building:1ms = 12ms
     [00YY] ./node_modules/rxjs/util/identity.js 118 bytes {0} [depth 4] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ../util/identity [rKQy] ./node_modules/rxjs/operators/mergeAll.js 3:17-44
            [] -> factory:17ms building:14ms = 31ms
     [1KT0] ./node_modules/rxjs/observable/merge.js 3.89 kB {0} [depth 2] [built]
            [only some exports used: merge]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            harmony import rxjs/observable/merge [3j3K] ./node_modules/@angular/core/@angular/core.es5.js 8:0-46
            [] -> factory:11ms building:2ms dependencies:4ms = 17ms
     [1r8+] ./node_modules/rxjs/util/isArrayLike.js 137 bytes {0} [depth 6] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./isArrayLike [CURp] ./node_modules/rxjs/util/subscribeToResult.js 3:20-44
            [] -> factory:5ms building:3ms = 8ms
     [6BaH] ./node_modules/rxjs/operators/multicast.js 2.61 kB {0} [depth 4] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./multicast [sTFn] ./node_modules/rxjs/operators/share.js 2:18-40
            [] -> factory:18ms building:7ms = 25ms
     [9dR0] ./node_modules/rxjs/operators/refCount.js 3.41 kB {0} [depth 4] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./refCount [sTFn] ./node_modules/rxjs/operators/share.js 3:17-38
            cjs require ../operators/refCount [sIYO] ./node_modules/rxjs/observable/ConnectableObservable.js 11:17-49
            [] -> factory:18ms building:10ms dependencies:1ms = 29ms
     [9eyw] ./node_modules/rxjs/util/pipe.js 611 bytes {0} [depth 3] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./util/pipe [rCTf] ./node_modules/rxjs/Observable.js 5:13-35
            [] -> factory:8ms building:16ms = 24ms
     [ANGw] ./node_modules/rxjs/operators/mergeMap.js 6.65 kB {0} [depth 4] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./mergeMap [rKQy] ./node_modules/rxjs/operators/mergeAll.js 2:17-38
            [] -> factory:17ms building:14ms = 31ms
     [B00U] ./node_modules/rxjs/Subscription.js 8.18 kB {0} [depth 3] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./Subscription [EEr4] ./node_modules/rxjs/Subject.js 9:21-46
            cjs require ./Subscription [ZJf8] ./node_modules/rxjs/SubjectSubscription.js 7:21-46
            cjs require ./Subscription [mmVS] ./node_modules/rxjs/Subscriber.js 8:21-46
            cjs require ../Subscription [sIYO] ./node_modules/rxjs/observable/ConnectableObservable.js 10:21-47
            [] -> factory:10ms building:9ms = 19ms
     [CURp] ./node_modules/rxjs/util/subscribeToResult.js 3.03 kB {0} [depth 5] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ../util/subscribeToResult [ANGw] ./node_modules/rxjs/operators/mergeMap.js 7:26-62
            [] -> factory:2ms building:8ms dependencies:2ms = 12ms
     [EEr4] ./node_modules/rxjs/Subject.js 5.69 kB {0} [depth 2] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            harmony import rxjs/Subject [3j3K] ./node_modules/@angular/core/@angular/core.es5.js 10:0-39
            cjs require ../Subject [sTFn] ./node_modules/rxjs/operators/share.js 4:16-37
            cjs require ../Subject [sIYO] ./node_modules/rxjs/observable/ConnectableObservable.js 7:16-37
            [] -> factory:11ms building:9ms dependencies:1ms = 21ms
     [GIjk] ./node_modules/rxjs/util/UnsubscriptionError.js 1.07 kB {0} [depth 4] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./util/UnsubscriptionError [B00U] ./node_modules/rxjs/Subscription.js 7:28-65
            [] -> factory:21ms building:7ms = 28ms
     [ICpg] ./node_modules/rxjs/util/isObject.js 151 bytes {0} [depth 4] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./util/isObject [B00U] ./node_modules/rxjs/Subscription.js 3:17-43
            cjs require ./isObject [CURp] ./node_modules/rxjs/util/subscribeToResult.js 5:17-38
            [] -> factory:20ms building:5ms = 25ms
     [IZVw] ./node_modules/rxjs/util/ObjectUnsubscribedError.js 955 bytes {0} [depth 3] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./util/ObjectUnsubscribedError [EEr4] ./node_modules/rxjs/Subject.js 10:32-73
            [] -> factory:11ms building:13ms = 24ms
     [QqRK] ./node_modules/rxjs/InnerSubscriber.js 1.29 kB {0} [depth 6] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ../InnerSubscriber [CURp] ./node_modules/rxjs/util/subscribeToResult.js 8:24-53
            [] -> factory:5ms building:3ms dependencies:0ms = 8ms
     [RRVv] ./node_modules/rxjs/observable/ScalarObservable.js 1.92 kB {0} [depth 4] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./ScalarObservable [Yh8Q] ./node_modules/rxjs/observable/ArrayObservable.js 8:25-54
            [] -> factory:23ms building:3ms dependencies:0ms = 26ms
     [SKH6] ./node_modules/rxjs/util/isFunction.js 148 bytes {0} [depth 4] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./util/isFunction [B00U] ./node_modules/rxjs/Subscription.js 4:19-47
            cjs require ./util/isFunction [mmVS] ./node_modules/rxjs/Subscriber.js 7:19-47
            [] -> factory:20ms building:5ms = 25ms
     [VOfZ] ./node_modules/rxjs/util/root.js 885 bytes {0} [depth 3] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./util/root [rCTf] ./node_modules/rxjs/Observable.js 2:13-35
            cjs require ../util/root [r8ZY] ./node_modules/rxjs/symbol/rxSubscriber.js 2:13-36
            cjs require ../util/root [mbVC] ./node_modules/rxjs/symbol/observable.js 2:13-36
            cjs require ./root [CURp] ./node_modules/rxjs/util/subscribeToResult.js 2:13-30
            cjs require ../util/root [cdmN] ./node_modules/rxjs/symbol/iterator.js 2:13-36
            [] -> factory:8ms building:14ms dependencies:0ms = 22ms
     [WhVc] ./node_modules/rxjs/util/errorObject.js 177 bytes {0} [depth 4] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./util/errorObject [B00U] ./node_modules/rxjs/Subscription.js 6:20-49
            cjs require ./errorObject [+3eL] ./node_modules/rxjs/util/tryCatch.js 2:20-44
            [] -> factory:21ms building:6ms = 27ms
     [Xajo] ./node_modules/rxjs/util/isArray.js 146 bytes {0} [depth 4] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./util/isArray [B00U] ./node_modules/rxjs/Subscription.js 2:16-41
            [] -> factory:20ms building:5ms = 25ms
     [YOd+] ./node_modules/rxjs/util/noop.js 117 bytes {0} [depth 4] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./noop [9eyw] ./node_modules/rxjs/util/pipe.js 2:13-30
            [] -> factory:14ms building:14ms = 28ms
     [Yh8Q] ./node_modules/rxjs/observable/ArrayObservable.js 4.61 kB {0} [depth 3] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./ArrayObservable [1KT0] ./node_modules/rxjs/observable/merge.js 3:24-52
            [] -> factory:16ms building:7ms dependencies:0ms = 23ms
     [ZJf8] ./node_modules/rxjs/SubjectSubscription.js 1.4 kB {0} [depth 3] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./SubjectSubscription [EEr4] ./node_modules/rxjs/Subject.js 11:28-60
            [] -> factory:10ms building:11ms dependencies:0ms = 21ms
     [aQl7] ./node_modules/rxjs/util/isPromise.js 207 bytes {0} [depth 6] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./isPromise [CURp] ./node_modules/rxjs/util/subscribeToResult.js 4:18-40
            [] -> factory:5ms building:1ms = 6ms
     [cdmN] ./node_modules/rxjs/symbol/iterator.js 1.34 kB {0} [depth 6] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ../symbol/iterator [CURp] ./node_modules/rxjs/util/subscribeToResult.js 7:17-46
            [] -> factory:5ms building:1ms dependencies:0ms = 6ms
     [fWbP] ./node_modules/rxjs/util/isScheduler.js 178 bytes {0} [depth 3] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ../util/isScheduler [1KT0] ./node_modules/rxjs/observable/merge.js 4:20-50
            cjs require ../util/isScheduler [Yh8Q] ./node_modules/rxjs/observable/ArrayObservable.js 10:20-50
            [] -> factory:18ms building:12ms = 30ms
     [jBEF] ./node_modules/rxjs/observable/EmptyObservable.js 3.01 kB {0} [depth 4] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./EmptyObservable [Yh8Q] ./node_modules/rxjs/observable/ArrayObservable.js 9:24-52
            [] -> factory:23ms building:4ms dependencies:0ms = 27ms
     [lHsB] ./node_modules/rxjs/util/toSubscriber.js 760 bytes {0} [depth 3] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./util/toSubscriber [rCTf] ./node_modules/rxjs/Observable.js 3:21-51
            [] -> factory:8ms building:15ms dependencies:1ms = 24ms
     [mbVC] ./node_modules/rxjs/symbol/observable.js 718 bytes {0} [depth 3] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./symbol/observable [rCTf] ./node_modules/rxjs/Observable.js 4:19-49
            cjs require ../symbol/observable [CURp] ./node_modules/rxjs/util/subscribeToResult.js 9:19-50
            [] -> factory:9ms building:22ms dependencies:0ms = 31ms
     [mmVS] ./node_modules/rxjs/Subscriber.js 10.3 kB {0} [depth 3] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./Subscriber [EEr4] ./node_modules/rxjs/Subject.js 8:19-42
            cjs require ../Subscriber [lHsB] ./node_modules/rxjs/util/toSubscriber.js 2:19-43
            cjs require ../Subscriber [9dR0] ./node_modules/rxjs/operators/refCount.js 7:19-43
            cjs require ../Subscriber [sIYO] ./node_modules/rxjs/observable/ConnectableObservable.js 9:19-43
            cjs require ./Subscriber [wAkD] ./node_modules/rxjs/OuterSubscriber.js 7:19-42
            cjs require ./Subscriber [QqRK] ./node_modules/rxjs/InnerSubscriber.js 7:19-42
            [] -> factory:10ms building:21ms dependencies:10ms = 41ms
     [r8ZY] ./node_modules/rxjs/symbol/rxSubscriber.js 363 bytes {0} [depth 3] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ./symbol/rxSubscriber [EEr4] ./node_modules/rxjs/Subject.js 12:21-53
            cjs require ../symbol/rxSubscriber [lHsB] ./node_modules/rxjs/util/toSubscriber.js 3:21-54
            cjs require ./symbol/rxSubscriber [mmVS] ./node_modules/rxjs/Subscriber.js 10:21-53
            [] -> factory:12ms building:21ms dependencies:0ms = 33ms
     [rCTf] ./node_modules/rxjs/Observable.js 13.2 kB {0} [depth 2] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            harmony import rxjs/Observable [3j3K] ./node_modules/@angular/core/@angular/core.es5.js 7:0-45
            cjs require ../Observable [1KT0] ./node_modules/rxjs/observable/merge.js 2:19-43
            cjs require ./Observable [EEr4] ./node_modules/rxjs/Subject.js 7:19-42
            cjs require ../Observable [Yh8Q] ./node_modules/rxjs/observable/ArrayObservable.js 7:19-43
            cjs require ../Observable [RRVv] ./node_modules/rxjs/observable/ScalarObservable.js 7:19-43
            cjs require ../Observable [jBEF] ./node_modules/rxjs/observable/EmptyObservable.js 7:19-43
            cjs require ../Observable [sIYO] ./node_modules/rxjs/observable/ConnectableObservable.js 8:19-43
            cjs require ../Observable [CURp] ./node_modules/rxjs/util/subscribeToResult.js 6:19-43
            [] -> factory:10ms building:13ms = 23ms
     [rKQy] ./node_modules/rxjs/operators/mergeAll.js 2.32 kB {0} [depth 3] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ../operators/mergeAll [1KT0] ./node_modules/rxjs/observable/merge.js 5:17-49
            [] -> factory:18ms building:12ms = 30ms
     [sIYO] ./node_modules/rxjs/observable/ConnectableObservable.js 6.96 kB {0} [depth 5] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ../observable/ConnectableObservable [6BaH] ./node_modules/rxjs/operators/multicast.js 2:30-76
            [] -> factory:9ms building:3ms dependencies:2ms = 14ms
     [sTFn] ./node_modules/rxjs/operators/share.js 1.02 kB {0} [depth 3] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ../operators/share [+ayw] ./node_modules/rxjs/operator/share.js 2:14-43
            [] -> factory:18ms building:12ms dependencies:0ms = 30ms
     [wAkD] ./node_modules/rxjs/OuterSubscriber.js 1.11 kB {0} [depth 5] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ../OuterSubscriber [ANGw] ./node_modules/rxjs/operators/mergeMap.js 8:24-53
            [] -> factory:2ms building:11ms dependencies:0ms = 13ms
     [yrou] ./node_modules/rxjs/Observer.js 193 bytes {0} [depth 4] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require ../Observer [lHsB] ./node_modules/rxjs/util/toSubscriber.js 4:17-39
            cjs require ./Observer [mmVS] ./node_modules/rxjs/Subscriber.js 9:17-38
            [] -> factory:14ms building:15ms = 29ms
    chunk    {1} app.596ce8.js, assets/css/app.022751.css (app) 9.37 kB {3} [initial] [rendered]
        > app []
     [6jZC] ./src lazy 160 bytes {1} [depth 2] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            import() context lazy . [3j3K] ./node_modules/@angular/core/@angular/core.es5.js 5659:15-36
            import() context lazy . [3j3K] ./node_modules/@angular/core/@angular/core.es5.js 5675:15-102
            [] -> factory:5ms building:1ms = 6ms
     [DuR2] (webpack)/buildin/global.js 509 bytes {1} [depth 2] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            cjs require global [ZSR1] ./node_modules/zone.js/dist/zone.js 1:0-44
            cjs require global [3j3K] ./node_modules/@angular/core/@angular/core.es5.js 1:0-47
            cjs require global [VOfZ] ./node_modules/rxjs/util/root.js 1:0-44
            [] -> factory:0ms building:1ms = 1ms
     [IckW] ./src/assets/css/styles.css 41 bytes {1} [depth 3] [built]
            [no exports used]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            harmony import ../assets/css/styles.css [THjQ] ./src/main-prod.ts + 4 modules 1:0-34
            [] -> factory:202ms building:4633ms = 4835ms
     [THjQ] ./src/main-prod.ts + 4 modules 8.66 kB {1} [depth 0] [built]
            [no exports]
            ModuleConcatenation bailout: Module is an entry point
            ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/core/@angular/core.es5.js (<- Module uses injected variables (global))
            ModuleConcatenation bailout: Cannot concat with ./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js
            ModuleConcatenation bailout: Cannot concat with ./node_modules/zone.js/dist/zone.js (<- Module is not an ECMAScript module)
    chunk    {2} polyfills.62a64b.js (polyfills) 42 bytes {5} [initial] [rendered]
        > polyfills [3msP] ./src/polyfills-prod.ts
     [3msP] ./src/polyfills-prod.ts 42 bytes {2} [depth 0] [built]
            ModuleConcatenation bailout: Module is not an ECMAScript module
             factory:3020ms building:34ms = 3054ms
    chunk    {3} angular-chunk.5d3b50.js (angular-chunk) 900 kB [initial] [rendered]
     [2Je8] ./node_modules/@angular/common/@angular/common.es5.js 132 kB {3} [depth 2] [built]
            [exports: NgLocaleLocalization, NgLocalization, ɵparseCookieValue, CommonModule, DeprecatedI18NPipesModule, NgClass, NgFor, NgForOf, NgForOfContext, NgIf, NgIfContext, NgPlural, NgPluralCase, NgStyle, NgSwitch, NgSwitchCase, NgSwitchDefault, NgTemplateOutlet, NgComponentOutlet, DOCUMENT, AsyncPipe, DatePipe, I18nPluralPipe, I18nSelectPipe, JsonPipe, LowerCasePipe, CurrencyPipe, DecimalPipe, PercentPipe, SlicePipe, UpperCasePipe, TitleCasePipe, ɵPLATFORM_BROWSER_ID, ɵPLATFORM_SERVER_ID, ɵPLATFORM_WORKER_APP_ID, ɵPLATFORM_WORKER_UI_ID, isPlatformBrowser, isPlatformServer, isPlatformWorkerApp, isPlatformWorkerUi, VERSION, PlatformLocation, LOCATION_INITIALIZED, LocationStrategy, APP_BASE_HREF, HashLocationStrategy, PathLocationStrategy,Location, ɵa, ɵb]
            [only some exports used: CommonModule, DOCUMENT, NgLocaleLocalization, NgLocalization, PlatformLocation, ɵPLATFORM_BROWSER_ID, ɵparseCookieValue]
            harmony import @angular/common [THjQ] ./src/main-prod.ts + 4 modules 11:0-38
            harmony import @angular/common [Qbdm] ./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js 7:0-116
            [] -> factory:223ms building:4595ms dependencies:39ms = 4857ms
     [3j3K] ./node_modules/@angular/core/@angular/core.es5.js 492 kB {3} [depth 1] [built]
            [exports: Class, createPlatform, assertPlatform, destroyPlatform, getPlatform, PlatformRef, ApplicationRef, enableProdMode, isDevMode, createPlatformFactory, NgProbeToken, APP_ID, PACKAGE_ROOT_URL, PLATFORM_INITIALIZER, PLATFORM_ID, APP_BOOTSTRAP_LISTENER, APP_INITIALIZER, ApplicationInitStatus, DebugElement, DebugNode, asNativeElements, getDebugNode, Testability, TestabilityRegistry, setTestabilityGetter, TRANSLATIONS, TRANSLATIONS_FORMAT, LOCALE_ID, MissingTranslationStrategy, ApplicationModule, wtfCreateScope, wtfLeave, wtfStartTimeRange, wtfEndTimeRange, Type, EventEmitter, ErrorHandler, Sanitizer, SecurityContext, ANALYZE_FOR_ENTRY_COMPONENTS, Attribute, ContentChild, ContentChildren, Query, ViewChild, ViewChildren, Component, Directive, HostBinding, HostListener, Input, Output, Pipe, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, NgModule, ViewEncapsulation, Version, VERSION, forwardRef, resolveForwardRef, Injector, ReflectiveInjector, ResolvedReflectiveFactory, ReflectiveKey, InjectionToken, OpaqueToken, Inject, Optional, Injectable, Self, SkipSelf, Host, NgZone, RenderComponentType, Renderer, Renderer2, RendererFactory2, RendererStyleFlags2, RootRenderer, COMPILER_OPTIONS, Compiler, CompilerFactory, ModuleWithComponentFactories, ComponentFactory, ComponentRef, ComponentFactoryResolver, ElementRef, NgModuleFactory, NgModuleRef, NgModuleFactoryLoader, getModuleFactory, QueryList, SystemJsNgModuleLoader, SystemJsNgModuleLoaderConfig, TemplateRef, ViewContainerRef, EmbeddedViewRef, ViewRef, ChangeDetectionStrategy, ChangeDetectorRef, DefaultIterableDiffer, IterableDiffers, KeyValueDiffers, SimpleChange, WrappedValue, platformCore, ɵALLOW_MULTIPLE_PLATFORMS, ɵAPP_ID_RANDOM_PROVIDER, ɵValueUnwrapper, ɵdevModeEqual, ɵisListLikeIterable, ɵChangeDetectorStatus, ɵisDefaultChangeDetectionStrategy, ɵConsole, ɵERROR_COMPONENT_TYPE, ɵComponentFactory, ɵCodegenComponentFactoryResolver, ɵViewMetadata, ɵReflectionCapabilities, ɵRenderDebugInfo, ɵglobal, ɵlooseIdentical, ɵstringify, ɵmakeDecorator, ɵisObservable, ɵisPromise, ɵclearProviderOverrides, ɵoverrideProvider, ɵNOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, ɵregisterModuleFactory, ɵEMPTY_ARRAY, ɵEMPTY_MAP, ɵand, ɵccf, ɵcmf, ɵcrt, ɵdid, ɵeld, ɵelementEventFullName, ɵgetComponentViewDefinitionFactory, ɵinlineInterpolate, ɵinterpolate, ɵmod, ɵmpd, ɵncd, ɵnov, ɵpid, ɵprd, ɵpad, ɵpod, ɵppd, ɵqud, ɵted, ɵunv, ɵvid, AUTO_STYLE, trigger, animate, group, sequence, style, state, keyframes, transition, ɵx, ɵy, ɵbc, ɵz, ɵbb, ɵba, ɵbd, ɵw, ɵk, ɵl, ɵm, ɵe, ɵf, ɵg, ɵh, ɵi, ɵj, ɵb, ɵc, ɵd, ɵn, ɵp, ɵo, ɵs, ɵq, ɵr, ɵa, ɵt, ɵu]
            [only some exports used: APP_ID, APP_INITIALIZER, ApplicationInitStatus, ApplicationModule, ApplicationRef, Attribute, ChangeDetectorRef, Compiler, ComponentFactoryResolver, Directive, ElementRef, ErrorHandler, EventEmitter, Host, Inject, Injectable, InjectionToken, Injector, Input, IterableDiffers, KeyValueDiffers, LOCALE_ID, NgModule, NgModuleRef, NgProbeToken, NgZone, Optional, PLATFORM_ID, PLATFORM_INITIALIZER, Pipe, Renderer, RendererFactory2, RendererStyleFlags2, Sanitizer, SecurityContext, SkipSelf, TemplateRef, Testability, Version, ViewContainerRef, ViewEncapsulation, WrappedValue, createPlatformFactory, enableProdMode, getDebugNode, isDevMode, platformCore, setTestabilityGetter, ɵCodegenComponentFactoryResolver, ɵConsole, ɵccf, ɵcmf, ɵcrt, ɵdid, ɵe, ɵeld, ɵf, ɵglobal, ɵisListLikeIterable, ɵisObservable, ɵisPromise, ɵk, ɵl, ɵm, ɵmod, ɵmpd, ɵstringify, ɵted, ɵvid]
            ModuleConcatenation bailout: Module uses injected variables (global)
            harmony import @angular/core [THjQ] ./src/main-prod.ts + 4 modules 1:0-47
            harmony import @angular/core [THjQ] ./src/main-prod.ts + 4 modules 7:0-36
            harmony import @angular/core [THjQ] ./src/main-prod.ts + 4 modules 7:0-36
            harmony import @angular/core [Qbdm] ./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js 8:0-462
            harmony import @angular/core [2Je8] ./node_modules/@angular/common/@angular/common.es5.js 7:0-392
            [] -> factory:123ms building:4989ms dependencies:4ms = 5116ms
     [Qbdm] ./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js 146 kB {3} [depth 1] [built]
            [exports: BrowserModule, platformBrowser, Meta, Title, disableDebugTools, enableDebugTools, By, NgProbeToken, DOCUMENT, EVENT_MANAGER_PLUGINS, EventManager, HAMMER_GESTURE_CONFIG, HammerGestureConfig, DomSanitizer, VERSION, ɵBROWSER_SANITIZATION_PROVIDERS, ɵINTERNAL_BROWSER_PLATFORM_PROVIDERS, ɵinitDomAdapter, ɵBrowserDomAdapter, ɵBrowserPlatformLocation, ɵTRANSITION_ID, ɵBrowserGetTestability, ɵELEMENT_PROBE_PROVIDERS, ɵDomAdapter, ɵgetDOM, ɵsetRootDomAdapter, ɵDomRendererFactory2, ɵNAMESPACE_URIS, ɵflattenStyles, ɵshimContentAttribute, ɵshimHostAttribute, ɵDomEventsPlugin, ɵHammerGesturesPlugin, ɵKeyEventsPlugin, ɵDomSharedStylesHost, ɵSharedStylesHost, ɵb, ɵa, ɵh, ɵg, ɵf, ɵc, ɵd, ɵe]
            [only some exports used: BrowserModule, DomSanitizer, EVENT_MANAGER_PLUGINS, EventManager, HAMMER_GESTURE_CONFIG, HammerGestureConfig, Meta, NgProbeToken, Title, platformBrowser, ɵDomEventsPlugin, ɵDomRendererFactory2, ɵDomSharedStylesHost, ɵHammerGesturesPlugin, ɵKeyEventsPlugin, ɵSharedStylesHost, ɵa, ɵc, ɵe]
            harmony import @angular/platform-browser [THjQ] ./src/main-prod.ts + 4 modules 2:0-60
            harmony import @angular/platform-browser [THjQ] ./src/main-prod.ts + 4 modules 12:0-48
            [] -> factory:123ms building:386ms dependencies:2ms = 511ms
     [ZSR1] ./node_modules/zone.js/dist/zone.js 130 kB {3} [depth 1] [built]
            [no exports used]
            ModuleConcatenation bailout: Module is not an ECMAScript module
            harmony import zone.js/dist/zone [THjQ] ./src/main-prod.ts + 4 modules 3:0-27
            [] -> factory:122ms building:357ms = 479ms
    chunk    {4} tslib-chunk.c3ed0a.js (tslib-chunk) 9.05 kB [initial] [rendered]
     [TToO] ./node_modules/tslib/tslib.es6.js 9.05 kB {4} [depth 2] [built]
            [exports: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault]
            [only some exports used: __extends]
            harmony import tslib [Qbdm] ./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js 1:0-33
            harmony import tslib [2Je8] ./node_modules/@angular/common/@angular/common.es5.js 1:0-33
            harmony import tslib [3j3K] ./node_modules/@angular/core/@angular/core.es5.js 1:0-33
            [] -> factory:4403ms building:15ms = 4418ms
    chunk    {5} wp-runtime.3b9c96.js (wp-runtime) 0 bytes [entry] [rendered]
    Child html-webpack-plugin for "index.html":
        PublicPath: /
         1 asset
        Entrypoint undefined = index.html
        chunk    {0} index.html 542 kB [entry] [rendered]
            > [wSpO] ./node_modules/html-webpack-plugin/lib/loader.js!./src/index.ejs
         [3IRH] (webpack)/buildin/module.js 517 bytes {0} [depth 2] [built]
                ModuleConcatenation bailout: Module is not an ECMAScript module
                cjs require module [M4fF] ./node_modules/lodash/lodash.js 1:0-41
                [] -> factory:154ms building:5ms = 159ms
         [DuR2] (webpack)/buildin/global.js 509 bytes {0} [depth 2] [built]
                ModuleConcatenation bailout: Module is not an ECMAScript module
                cjs require global [M4fF] ./node_modules/lodash/lodash.js 1:0-41
                [] -> factory:154ms building:4ms = 158ms
         [M4fF] ./node_modules/lodash/lodash.js 540 kB {0} [depth 1] [built]
                ModuleConcatenation bailout: Module is not an ECMAScript module
                cjs require !!../node_modules/lodash/lodash.js [wSpO] ./node_modules/html-webpack-plugin/lib/loader.js!./src/index.ejs 1:8-53
                [] -> factory:2ms building:2974ms = 2976ms
         [wSpO] ./node_modules/html-webpack-plugin/lib/loader.js!./src/index.ejs 897 bytes {0} [depth 0] [built]
                ModuleConcatenation bailout: Module is not an ECMAScript module
                 factory:339ms building:12ms = 351ms
    Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/index.js??ref--3-2!node_modules/postcss-loader/lib/index.js??ref--3-3!src/assets/css/styles.css:
        PublicPath: /
        Entrypoint undefined = extract-text-webpack-plugin-output-filename
        chunk    {0} extract-text-webpack-plugin-output-filename 313 kB [entry] [rendered]
            > [ZZTi] ./node_modules/css-loader??ref--3-2!./node_modules/postcss-loader/lib??ref--3-3!./src/assets/css/styles.css
         [FZ+f] ./node_modules/css-loader/lib/css-base.js 2.26 kB {0} [depth 1] [built]
                ModuleConcatenation bailout: Module is not an ECMAScript module
                cjs require ../../../node_modules/css-loader/lib/css-base.js [ZZTi] ./node_modules/css-loader??ref--3-2!./node_modules/postcss-loader/lib??ref--3-3!./src/assets/css/styles.css 1:27-86
                [] -> factory:88ms building:2ms = 90ms
         [ZZTi] ./node_modules/css-loader??ref--3-2!./node_modules/postcss-loader/lib??ref--3-3!./src/assets/css/styles.css 311 kB {0} [depth 0] [built]
                ModuleConcatenation bailout: Module is not an ECMAScript module
                 factory:2ms building:4508ms = 4510ms
```

### Travis

```
Version: webpack 3.12.0
Child
    Hash: 1c456f
    Time: 41311ms
                                  Asset       Size         Chunks                    Chunk Names
      assets/images//angular.9db278.png    2.38 kB                 [emitted]
                angular-chunk.8ee274.js     267 kB  angular-chunk  [emitted]  [big]  angular-chunk
                          app.e6feb9.js    3.58 kB            app  [emitted]         app
                    polyfills.12946e.js   62 bytes      polyfills  [emitted]         polyfills
                   rxjs-chunk.08b276.js      25 kB     rxjs-chunk  [emitted]         rxjs-chunk
                  tslib-chunk.76b563.js  382 bytes    tslib-chunk  [emitted]         tslib-chunk
                   wp-runtime.59aca9.js    1.04 kB     wp-runtime  [emitted]         wp-runtime
              assets/css/app.022751.css    2.77 kB            app  [emitted]         app
                             index.html    1.23 kB                 [emitted]
    ./../target/webpack-prod-stats.json    0 bytes                 [emitted]
    [3msP] ./src/polyfills-prod.ts 42 bytes {polyfills} [built]
            factory:13220ms building:72ms = 13292ms
    [6jZC] ./src lazy 160 bytes {app} [built]
           [] -> factory:8ms building:6ms = 14ms
    [DuR2] (webpack)/buildin/global.js 509 bytes {app} [built]
           [] -> factory:1ms building:0ms = 1ms
    [IckW] ./src/assets/css/styles.css 41 bytes {app} [built]
           [] -> factory:1135ms building:10447ms = 11582ms
    [Iksp] ./src/app/app.module.ts 65 bytes {app} [built]
           [] -> factory:8ms building:14ms = 22ms
    [K3SU] ./$$_gendir/src/app/app.component.ngfactory.ts 4.36 kB {app} [built]
           [] -> factory:70ms building:180ms dependencies:148ms = 398ms
    [THjQ] ./src/main-prod.ts 424 bytes {app} [built]
            factory:13219ms building:65ms = 13284ms
    [YWx4] ./src/app/app.component.ts 368 bytes {app} [built]
           [] -> factory:22ms building:45ms = 67ms
    [c3p7] ./$$_gendir/src/app/app.module.ngfactory.ts 3.38 kB {app} [built]
           [] -> factory:11ms building:112ms dependencies:406ms = 529ms
        + 38 hidden modules
    Child html-webpack-plugin for "index.html":
         1 asset
        [3IRH] (webpack)/buildin/module.js 517 bytes {module.js_global.js_lodash.js_../node_modules/html-webpack-plugin/lib/loader.js!/home/travis/build/joma74/angular-ultimate-pro/src/index.ejs} [built]
               [] -> factory:527ms building:10ms = 537ms
        [DuR2] (webpack)/buildin/global.js 509 bytes {module.js_global.js_lodash.js_../node_modules/html-webpack-plugin/lib/loader.js!/home/travis/build/joma74/angular-ultimate-pro/src/index.ejs} [built]
               [] -> factory:527ms building:9ms = 536ms
        [wSpO] ./node_modules/html-webpack-plugin/lib/loader.js!./src/index.ejs 897 bytes {module.js_global.js_lodash.js_../node_modules/html-webpack-plugin/lib/loader.js!/home/travis/build/joma74/angular-ultimate-pro/src/index.ejs} [built]
                factory:1000ms building:56ms = 1056ms
            + 1 hidden module
    Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/index.js??ref--3-2!node_modules/postcss-loader/lib/index.js??ref--3-3!src/assets/css/styles.css:
        [ZZTi] ./node_modules/css-loader??ref--3-2!./node_modules/postcss-loader/lib??ref--3-3!./src/assets/css/styles.css 311 kB {css-base.js_../../../node_modules/css-loader/index.js??ref--3-2!/home/travis/build/joma74/angular-ultimate-pro/node_modules/postcss-loader/lib/index.js??ref--3-3!/home/travis/build/joma74/angular-ultimate-pro/src/assets/css/styles.css} [built]
                factory:2ms building:10175ms = 10177ms
            + 1 hidden module
```
