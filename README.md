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

## Build Stats

- webpack prod config uses HashedModuleIdsPlugin, which allows for shorter module ids e.g. `[IckW] ./src/assets/css/styles.css 41 bytes {app} [built]`
- webpack dev config uses NamedModulesPlugin, which generates module ids after the module's resource path and name e.g. `[./node_modules/@angular/core/@angular/core.es5.js] ./node_modules/@angular/core/@angular/core.es5.js 492 kB {angular-chunk} [built]`

###

```
Version: webpack 3.12.0
Child
    Hash: 3d063e
    Time: 19552ms
                                  Asset       Size         Chunks             Chunk Names
      assets/images//angular.9db278.png    2.38 kB                 [emitted]
                angular-chunk.e4749e.js     226 kB  angular-chunk  [emitted]  angular-chunk
                          app.9f35bb.js    3.55 kB            app  [emitted]  app
                    polyfills.e13a82.js    67.8 kB      polyfills  [emitted]  polyfills
                   rxjs-chunk.08b276.js      25 kB     rxjs-chunk  [emitted]  rxjs-chunk
                  tslib-chunk.76b563.js  382 bytes    tslib-chunk  [emitted]  tslib-chunk
                   wp-runtime.59aca9.js    1.04 kB     wp-runtime  [emitted]  wp-runtime
              assets/css/app.022751.css    2.77 kB            app  [emitted]  app
                             index.html    1.23 kB                 [emitted]
    ./../target/webpack-prod-stats.json    0 bytes                 [emitted]
    [IckW] ./src/assets/css/styles.css 41 bytes {app} [built]
           [] -> factory:607ms building:7194ms = 7801ms
    [Iksp] ./src/app/app.module.ts 65 bytes {app} [built]
           [] -> factory:11ms building:19ms = 30ms
    [XS25] ./src/polyfills.ts 125 bytes {polyfills} [built]
            factory:6127ms building:65ms = 6192ms
    [6jZC] ./src lazy 160 bytes {app} [built]
           [] -> factory:4ms building:0ms = 4ms
    [YWx4] ./src/app/app.component.ts 368 bytes {app} [built]
           [] -> factory:30ms building:29ms = 59ms
    [THjQ] ./src/main-prod.ts 396 bytes {app} [built]
            factory:6128ms building:96ms = 6224ms
    [DuR2] (webpack)/buildin/global.js 509 bytes {polyfills} {app} [built]
           [] -> factory:1ms building:0ms = 1ms
    [c3p7] ./$$_gendir/src/app/app.module.ngfactory.ts 3.4 kB {app} [built]
           [] -> factory:31ms building:190ms dependencies:200ms = 421ms
    [K3SU] ./$$_gendir/src/app/app.component.ngfactory.ts 4.38 kB {app} [built]
           [] -> factory:60ms building:117ms dependencies:21ms = 198ms
        + 139 hidden modules
    Child html-webpack-plugin for "index.html":
         1 asset
        [DuR2] (webpack)/buildin/global.js 509 bytes {module.js_global.js_lodash.js_../node_modules/html-webpack-plugin/lib/loader.js!/home/joma/entwicklung/nodews/angular-ultimate-pro/src/index.ejs} [built]
               [] -> factory:424ms building:61ms = 485ms
        [3IRH] (webpack)/buildin/module.js 517 bytes {module.js_global.js_lodash.js_../node_modules/html-webpack-plugin/lib/loader.js!/home/joma/entwicklung/nodews/angular-ultimate-pro/src/index.ejs} [built]
               [] -> factory:424ms building:62ms = 486ms
        [wSpO] ./node_modules/html-webpack-plugin/lib/loader.js!./src/index.ejs 897 bytes {module.js_global.js_lodash.js_../node_modules/html-webpack-plugin/lib/loader.js!/home/joma/entwicklung/nodews/angular-ultimate-pro/src/index.ejs} [built]
                factory:447ms building:23ms = 470ms
            + 1 hidden module
    Child extract-text-webpack-plugin node_modules/extract-text-webpack-plugin/dist node_modules/css-loader/index.js??ref--3-2!node_modules/postcss-loader/lib/index.js??ref--3-3!src/assets/css/styles.css:
        [ZZTi] ./node_modules/css-loader??ref--3-2!./node_modules/postcss-loader/lib??ref--3-3!./src/assets/css/styles.css 311 kB {css-base.js_../../../node_modules/css-loader/index.js??ref--3-2!/home/joma/entwicklung/nodews/angular-ultimate-pro/node_modules/postcss-loader/lib/index.js??ref--3-3!/home/joma/entwicklung/nodews/angular-ultimate-pro/src/assets/css/styles.css} [built]
                factory:4ms building:7053ms = 7057ms
            + 1 hidden module
```
