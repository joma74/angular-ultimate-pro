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

- #1 webpack issues different chunkhashes for entries per installation. May be due to absolute module paths. See https://github.com/webpack/webpack/issues/2215, which is merged into webpack 5-alpha.
  - on `Workstation` they stay the same
  - on `Travis` they stay the same
  - But inbetween they are different (`/home/joma/entwicklung/nodews/angular-ultimate-pro/` vs `/home/travis/build/joma74/angular-ultimate-pro/`).

## Build Stats

- webpack prod config uses HashedModuleIdsPlugin, which allows for shorter module ids e.g. `[IckW] ./src/assets/css/styles.css 41 bytes {app} [built]`
- webpack dev config uses NamedModulesPlugin, which generates module ids after the module's resource path and name e.g. `[./node_modules/@angular/core/@angular/core.es5.js] ./node_modules/@angular/core/@angular/core.es5.js 492 kB {angular-chunk} [built]`

### Workstation

```
Hash: 08cabd
Version: webpack 3.12.0
Child
    Hash: 08cabd
    Time: 22935ms
    PublicPath: /
                                  Asset       Size  Chunks                    Chunk Names
      assets/images//angular.9db278.png    2.38 kB          [emitted]
                   rxjs-chunk.f658e6.js    24.9 kB       0  [emitted]         rxjs-chunk
                          app.674192.js    3.57 kB       1  [emitted]         app
                    polyfills.62a64b.js   52 bytes       2  [emitted]         polyfills
                angular-chunk.5d3b50.js     267 kB       3  [emitted]  [big]  angular-chunk
                  tslib-chunk.c3ed0a.js  370 bytes       4  [emitted]         tslib-chunk
                   wp-runtime.3b9c96.js    1.03 kB       5  [emitted]         wp-runtime
              assets/css/app.022751.css    2.77 kB       1  [emitted]         app
                             index.html    1.23 kB          [emitted]
    ./../target/webpack-prod-stats.json    0 bytes          [emitted]
    Entrypoint app [big] = wp-runtime.3b9c96.js rxjs-chunk.f658e6.js tslib-chunk.c3ed0a.js angular-chunk.5d3b50.js app.674192.js assets/css/app.022751.css
    Entrypoint polyfills = wp-runtime.3b9c96.js polyfills.62a64b.js
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
