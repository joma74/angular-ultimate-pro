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
