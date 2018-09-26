Error.stackTraceLimit = Infinity

require("core-js/es6")
// @ts-ignore
require("core-js/es7/reflect")

// @ts-ignore
require("zone.js/dist/zone")
// @ts-ignore
require("zone.js/dist/zone-testing")

var appContext = require.context("../src", true, /\.spec\.ts/)

appContext.keys().forEach(appContext)

var testing = require("@angular/core/testing")
var browser = require("@angular/platform-browser-dynamic/testing")

testing.TestBed.initTestEnvironment(
	browser.BrowserDynamicTestingModule,
	browser.platformBrowserDynamicTesting(),
)
