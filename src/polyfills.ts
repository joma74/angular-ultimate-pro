import "core-js/es6"
import "core-js/es7/reflect"
// tslint:disable-next-line:no-var-requires
require("zone.js/dist/zone")

if (process.env.ENV === "production") {
	// Production
} else {
	// Development and test
	Error.stackTraceLimit = Infinity
	// tslint:disable-next-line:no-var-requires
	require("zone.js/dist/long-stack-trace-zone")
}
