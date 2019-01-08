const ENVDEBUG = require("./env/ENVDEBUG")
const ENVLL = require("./env/ENVLL")
const ENVTRAVIS = require("./env/ENVTRAVIS")
const ENVKARMASVRPORT = require("./env/ENVKARMASVRPORT")
const ENVBROWSERRMTDBGPORT = require("./env/ENVBROWSERRMTDBGPORT")

const webpackConfig = require("./webpack.test.config")
const prettyFormat = require("pretty-format")

const inDebugLoongTimeoutMS = 60 * 60 * 1000

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

    browserDisconnectTimeout: ENVDEBUG.isSet() ? inDebugLoongTimeoutMS : 0,
    browserDisconnectTolerance: ENVDEBUG.isSet() ? 100 : 0,
    browserNoActivityTimeout: ENVDEBUG.isSet() ? inDebugLoongTimeoutMS : 0,
    // @ts-ignore
    browserSocketTimeout: ENVDEBUG.isSet() ? inDebugLoongTimeoutMS : 0,

    browsers: ["ChromeHeadless"], // ["Chrome"]

    captureTimeout: ENVDEBUG.isSet() ? inDebugLoongTimeoutMS : 0,

    colors: true,

    client: {
      captureConsole: true,
    },

    // @ts-ignore
    customLaunchers: {
      Chrome_debugging: {
        base: "ChromeHeadless",
        flags: [`--remote-debugging-port=${ENVBROWSERRMTDBGPORT.get()}`],
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

    port: parseInt(ENVKARMASVRPORT.get()),
    reporters: ["spec"], // reporters: ["spec", "kjhtml"],
    singleRun: true,
  }

  if (ENVTRAVIS.isSet()) {
    _config.browsers = ["Chrome_travis_ci"]
  }

  if (ENVDEBUG.isSet()) {
    _config.browsers = ["Chrome_debugging"]
  }

  config.set(_config)

  if (ENVLL.isDebugEnabled()) {
    const output = prettyFormat(config, { highlight: true })
    // tslint:disable-next-line:no-console
    console.debug(output)
  }
}
