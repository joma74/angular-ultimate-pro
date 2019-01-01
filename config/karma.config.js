const helpers = require("./helpers")
const webpackConfig = require("./webpack.test.config")
const prettyFormat = require("pretty-format")

const inDebugLoongTimeoutMS = 60 * 60 * 1000

const isTRAVIS = helpers.convertToBoolean(process.env.TRAVIS)
const isDEBUG = helpers.convertToBoolean(process.env.DEBUG)
const isLLDEBUG = process.env.LL === "debug"

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

    browserDisconnectTimeout: isDEBUG ? inDebugLoongTimeoutMS : 0,
    browserDisconnectTolerance: isDEBUG ? 100 : 0,
    browserNoActivityTimeout: isDEBUG ? inDebugLoongTimeoutMS : 0,
    // @ts-ignore
    browserSocketTimeout: isDEBUG ? inDebugLoongTimeoutMS : 0,

    browsers: ["ChromeHeadless"], // ["Chrome"]

    captureTimeout: isDEBUG ? inDebugLoongTimeoutMS : 0,

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

  if (isTRAVIS) {
    _config.browsers = ["Chrome_travis_ci"]
  }

  if (isDEBUG) {
    _config.browsers = ["Chrome_debugging"]
  }

  config.set(_config)

  if (isLLDEBUG) {
    const output = prettyFormat(config, { highlight: true })
    // tslint:disable-next-line:no-console
    console.debug(output)
  }
}
