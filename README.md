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
Version: webpack 3.12.0
Child
    Hash: b88f0f
    Time: 11584ms
                                  Asset       Size         Chunks                    Chunk Names
      assets/images//angular.9db278.png    2.38 kB                 [emitted]
                angular-chunk.8ee274.js     267 kB  angular-chunk  [emitted]  [big]  angular-chunk
                          app.8295a2.js    3.58 kB            app  [emitted]         app
                    polyfills.12946e.js   62 bytes      polyfills  [emitted]         polyfills
                   rxjs-chunk.08b276.js      25 kB     rxjs-chunk  [emitted]         rxjs-chunk
                  tslib-chunk.76b563.js  382 bytes    tslib-chunk  [emitted]         tslib-chunk
                   wp-runtime.59aca9.js    1.04 kB     wp-runtime  [emitted]         wp-runtime
              assets/css/app.022751.css    2.77 kB            app  [emitted]         app
                             index.html    1.23 kB                 [emitted]
    ./../target/webpack-prod-stats.json    0 bytes                 [emitted]
    [3msP] ./src/polyfills-prod.ts 42 bytes {polyfills} [built]
            factory:3042ms building:33ms = 3075ms
    [6jZC] ./src lazy 160 bytes {app} [built]
           [] -> factory:5ms building:0ms = 5ms
    [DuR2] (webpack)/buildin/global.js 509 bytes {app} [built]
           [] -> factory:1ms building:0ms = 1ms
    [IckW] ./src/assets/css/styles.css 41 bytes {app} [built]
           [] -> factory:198ms building:3417ms = 3615ms
    [Iksp] ./src/app/app.module.ts 65 bytes {app} [built]
           [] -> factory:3ms building:6ms = 9ms
    [K3SU] ./$$_gendir/src/app/app.component.ngfactory.ts 4.38 kB {app} [built]
           [] -> factory:20ms building:35ms dependencies:7ms = 62ms
    [THjQ] ./src/main-prod.ts 424 bytes {app} [built]
            factory:3042ms building:28ms = 3070ms
    [YWx4] ./src/app/app.component.ts 368 bytes {app} [built]
           [] -> factory:9ms building:10ms = 19ms
    [c3p7] ./$$_gendir/src/app/app.module.ngfactory.ts 3.4 kB {app} [built]
           [] -> factory:6ms building:38ms dependencies:62ms = 106ms
        + 38 hidden modules
    Child html-webpack-plugin for "index.html":
         1 asset
        [3IRH] (webpack)/buildin/module.js 517 bytes {module.js_global.js_lodash.js_../node_modules/html-webpack-plugin/lib/loader.js!/home/joma/entwicklung/nodews/angular-ultimate-pro/src/index.ejs} [built]
               [] -> factory:154ms building:4ms = 158ms
        [DuR2] (webpack)/buildin/global.js 509 bytes {module.js_global.js_lodash.js_../node_modules/html-webpack-plugin/lib/loader.js!/home/joma/entwicklung/nodews/angular-ultimate-pro/src/index.ejs} [built]
               [] -> factory:154ms building:4ms = 158ms
        [wSpO] ./node_modules/html-webpack-plugin/lib/loader.js!./src/index.ejs 897 bytes {module.js_global.js_lodash.js_../node_modules/html-webpack-plugin/lib/loader.js!/home/joma/entwicklung/nodews/angular-ultimate-pro/src/index.ejs} [built]
                factory:314ms building:14ms = 328ms
            + 1 hidden module
    Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/index.js??ref--3-2!node_modules/postcss-loader/lib/index.js??ref--3-3!src/assets/css/styles.css:
        [ZZTi] ./node_modules/css-loader??ref--3-2!./node_modules/postcss-loader/lib??ref--3-3!./src/assets/css/styles.css 311 kB {css-base.js_../../../node_modules/css-loader/index.js??ref--3-2!/home/joma/entwicklung/nodews/angular-ultimate-pro/node_modules/postcss-loader/lib/index.js??ref--3-3!/home/joma/entwicklung/nodews/angular-ultimate-pro/src/assets/css/styles.css} [built]
                factory:1ms building:3330ms = 3331ms
            + 1 hidden module
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
