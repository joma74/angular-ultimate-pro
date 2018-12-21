const commonConfig = require("./webpack.common.config")
const helpers = require("./helpers")
const jsonServer = require("json-server")
const webpack = require("webpack")
const webpackMerge = require("webpack-merge")
const { CheckerPlugin } = require("awesome-typescript-loader")
const DiskPlugin = require("webpack-disk-plugin")
const prettyFormat = require("pretty-format")
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin")
const DashboardPlugin = require("webpack-dashboard/plugin")
const noop = require("noop-webpack-plugin")

const ENV_MODE = (process.env.NODE_ENV = process.env.ENV = "development")
const WITHDASHBOARD_ENV = process.env.WITHDASHBOARD

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
  entry: {
    app: helpers.root("src/main-dev.ts"),
  },
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
              configFileName: helpers.root("tsconfig.json"),
              silent: true,
            },
          },
          "angular2-template-loader",
        ],
      },
    ],
  },
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

    WITHDASHBOARD_ENV ? noop() : new DashboardPlugin({ port: 4002 }),
  ],
  resolve: {
    modules: [helpers.root("src"), helpers.root("node_modules")],
  },
}

const webpackConfig = [webpackMerge(commonConfig, devConfig)]

const output = prettyFormat(webpackConfig, { highlight: true })

// tslint:disable-next-line:no-console
console.debug(output)

module.exports = webpackConfig
