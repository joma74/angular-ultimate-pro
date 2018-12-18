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

## With zone.js as import in app

```
                                                           Asset       Size  Chunks                    Chunk Names
     assets/images//angular.9db278d630f5fabd8e7ba16c2e329a3a.png    2.38 kB          [emitted]
                                     app.d6703ecda37c9860d871.js     301 kB       0  [emitted]  [big]  app
                               polyfills.d6703ecda37c9860d871.js    1.03 kB       1  [emitted]         polyfills
             assets/css/app.02275117d722577ce7a4b51b88d112f2.css    2.77 kB       0  [emitted]         app
                                                      index.html  732 bytes          [emitted]
                             ./../target/webpack-prod-stats.json    0 bytes          [emitted]
```

## With zone.js as import in polyfills

```
                                                          Asset       Size  Chunks                    Chunk Names
    assets/images//angular.9db278d630f5fabd8e7ba16c2e329a3a.png    2.38 kB          [emitted]
                                    app.156913ed7e5afe9520a8.js     259 kB       0  [emitted]  [big]  app
                              polyfills.156913ed7e5afe9520a8.js      77 kB       1  [emitted]         polyfills
            assets/css/app.02275117d722577ce7a4b51b88d112f2.css    2.77 kB       0  [emitted]         app
                                                     index.html  732 bytes          [emitted]
                            ./../target/webpack-prod-stats.json    0 bytes          [emitted]
```
