const HardSourceWebpackPlugin = require("hard-source-webpack-plugin")
const helpers = require("./helpers")
const webpack = require("webpack")

/**
 * @type {import ("webpack").Node}
 */
const node = {
  Buffer: false,
  clearImmediate: false,
  clearTimeout: true,
  crypto: "empty",
  global: true,
  module: false,
  process: true,
  setImmediate: false,
  setTimeout: true,
}

/**
 * @type {import ("webpack").Configuration}
 */
const webpackCommonConfig = {
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        exclude: /node_modules/,
        include: helpers.rootAbs("src", "app"),
        loaders: ["raw-loader", "sass-loader"], // sass-loader not scss-loader
        test: /\.scss$/,
      },
    ],
  },
  node,
  plugins: [
    // Workaround for angular/angular#11580
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
    modules: [helpers.rootAbs("src"), helpers.rootAbs("node_modules")],
  },
}

module.exports = webpackCommonConfig
