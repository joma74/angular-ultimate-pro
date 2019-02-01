const ENVLL = require("./env/ENVLL")
const ENVMODE = require("./env/ENVMODE")

const HardSourceWebpackPlugin = require("hard-source-webpack-plugin")
const helpers = require("./helpers")
const prettyFormat = require("pretty-format")

const webpack = require("webpack")
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
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: "null-loader",
      },
      {
        exclude: /node_modules/,
        include: helpers.rootAbs("src", "app"),
        loaders: ["raw-loader", "sass-loader"], // sass-loader not scss-loader
        test: /\.scss$/,
      },
      {
        exclude: helpers.rootAbs("src", "app"),
        test: /\.css$/,
        use: "null-loader",
      },
      {
        include: helpers.rootAbs("src", "app"),
        test: /\.css$/,
        use: "raw-loader",
      },
    ],
  },
  plugins: [
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.rootAbs("./src"), // location of your src
      {}, // a map of your routes
    ),

    new HardSourceWebpackPlugin({
      // Clean up large, old caches automatically.
      cachePrune: {
        // Caches younger than `maxAge` are not considered for deletion. They must
        // be at least this (default: 2 days) old in milliseconds.
        maxAge: 2 * 24 * 60 * 60 * 1000,
        // All caches together must be larger than `sizeThreshold` before any
        // caches will be deleted. Together they must be at least this
        // (default: 50 MB) big in bytes.
        sizeThreshold: 100 * 1024 * 1024,
      },
      info: {
        // 'debug', 'log', 'info', 'warn', or 'error'.
        level: "debug",
        // 'none' or 'test'.
        mode: "none",
      },
    }),
  ],
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
