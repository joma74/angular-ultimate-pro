// @ts-ignore
require("karma-jasmine-html-reporter")

var webpackConfig = require("./webpack.test.config")

/**
 * @param  {import ("karma").Config} config
 */
module.exports = function(config) {
	/**
	 * @type  {import ("karma").ConfigOptions}
	 */
	var _config = {
		autoWatch: false,
		basePath: "",
		browsers: ["Chrome"],
		colors: true,

		// @ts-ignore
		customLaunchers: {
			Chrome_travis_ci: {
				base: "Chrome",
				flags: ["--no-sandbox"],
			},
		},

		frameworks: ["jasmine"],

		// @ts-ignore
		failOnEmptyTestSuite: false,

		files: [
			{ pattern: "./config/karma.testloader.webpack.js", watched: false },
		],

		logLevel: config.LOG_INFO,
		mime: { "text/x-typescript": ["ts", "tsx"] },

		preprocessors: {
			"./config/karma.testloader.webpack.js": ["webpack", "sourcemap"],
		},

		webpack: webpackConfig,

		webpackMiddleware: {
			stats: "errors-only",
		},

		/**
		 * @type {import("webpack-dev-server").Configuration}
		 */
		webpackServer: {
			noInfo: true,
		},

		port: 9876,
		reporters: ["progress", "kjhtml"],
		singleRun: true,
	}

	if (process.env.TRAVIS) {
		_config.browsers = ["Chrome_travis_ci"]
	}

	config.set(_config)
}
