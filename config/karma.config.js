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
    browsers: ["ChromeHeadless"], // ["Chrome"]
    colors: true,

    client: {
      captureConsole: true,
    },

    // @ts-ignore
    customLaunchers: {
      Chrome_debugging: {
        base: "ChromeHeadless",
        flags: ["--remote-debugging-port=9222"],
      },
      Chrome_travis_ci: {
        base: "ChromeHeadless",
        flags: ["--no-sandbox", "--disable-gpu"],
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
    reporters: ["spec"], // reporters: ["spec", "kjhtml"],
    singleRun: true,
  }

  if (process.env.TRAVIS) {
    _config.browsers = ["Chrome_travis_ci"]
  }

  if (process.env.DEBUG) {
    _config.browsers = ["Chrome_debugging"]
  }

  config.set(_config)
}
