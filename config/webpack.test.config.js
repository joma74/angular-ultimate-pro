const ENVLL = require("./env/ENVLL")
const ENVMODE = require("./env/ENVMODE")

const helpers = require("./helpers")
const prettyFormat = require("pretty-format")

const webpackMerge = require("webpack-merge")

const commonConfig = require("./webpack.common.config")

/**
 * set MODE first!!
 */
// @ts-ignore
const ENV_MODE = ENVMODE.setToDevelopment()

/**
 * @type {import ("webpack").Configuration}
 */
const testConfig = {
  devtool: "inline-source-map",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "ng-router-loader",
          },
          {
            loader: "awesome-typescript-loader",
            options: {
              configFileName: helpers.rootAbs("tsconfig.json"),
              reportFiles: ["src/**/*.{ts,tsx}"],
              silent: true,
            },
          },
          "angular2-template-loader",
        ],
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: "null-loader",
      },
      {
        exclude: helpers.rootAbs("src", "assets", "css"),
        test: /\.css$/,
        use: "null-loader",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
}

let webpackConfig = [webpackMerge(commonConfig, testConfig)]

if (ENVLL.isDebugEnabled()) {
  const output = prettyFormat(webpackConfig, {
    highlight: true,
    maxDepth: ENVLL.isTraceEnabled() ? Infinity : 5,
  })
  // tslint:disable-next-line:no-console
  console.debug(output)
}

module.exports = webpackConfig
