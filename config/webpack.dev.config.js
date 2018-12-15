const commonConfig = require("./webpack.common.config")
const helpers = require("./helpers")
const jsonServer = require("json-server")
const webpack = require("webpack")
const webpackMerge = require("webpack-merge")
const { CheckerPlugin } = require("awesome-typescript-loader")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const DiskPlugin = require("webpack-disk-plugin")
const prettyFormat = require("pretty-format")
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin")
const DashboardPlugin = require("webpack-dashboard/plugin")
const noop = require("noop-webpack-plugin")

const ENV_MODE = (process.env.NODE_ENV = process.env.ENV = "development")
const TRAVIS_ENV = process.env.TRAVIS

/**
 * Current Project Dir
 */
const contentNotFromWebpackIsServedFrom = helpers.root("src/")
const publicPath = "/"

/**
 * @type {import("webpack-dev-server").Configuration}
 */
const devServer = {
  before(app) {
    app.use("/api", jsonServer.router(helpers.root("/db.json")))
  },
  clientLogLevel: "warning",
  compress: true,
  contentBase: contentNotFromWebpackIsServedFrom,
  historyApiFallback: true,
  host: "0.0.0.0",
  hot: true,
  port: 4001,
  stats: "minimal",
  watchContentBase: false,
}
/**
 * @type {import ("webpack").Configuration}
 */
const devConfig = {
  devServer,
  devtool: "cheap-module-eval-source-map",
  output: {
    chunkFilename: "[id].chunk.js",
    filename: "[name].js",
    path: helpers.root("dist"),
    publicPath,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        ENV: JSON.stringify(ENV_MODE),
      },
    }),

    new CheckerPlugin(),

    new ExtractTextPlugin("of[name].css"),

    // Write out asset files to disk.
    new DiskPlugin({
      files: [
        {
          asset: /\.css$/,
          output: {
            filename: "styles.css",
          },
        },
      ],
      output: {
        path: helpers.root("/target/"),
      },
    }),

    new HardSourceWebpackPlugin({
      info: {
        // 'debug', 'log', 'info', 'warn', or 'error'.
        level: "warn",
        // 'none' or 'test'.
        mode: "none",
      },
      reportFiles: ["src/**/*.{ts,tsx}"],
      useCache: true,
    }),

    new webpack.HotModuleReplacementPlugin(),

    TRAVIS_ENV ? noop() : new DashboardPlugin({ port: 4002 }),
  ],
}

const webpackConfig = [webpackMerge(commonConfig, devConfig)]

const output = prettyFormat(webpackConfig, { highlight: true })

// tslint:disable-next-line:no-console
console.log(output)

module.exports = webpackConfig
