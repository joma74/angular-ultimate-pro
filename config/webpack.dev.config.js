const helpers = require("./helpers")
const jsonServer = require("json-server")
const prettyFormat = require("pretty-format")
/**
 * https://web.archive.org/web/20180216190554/https://webpack.js.org/concepts/
 */
const webpack = require("webpack")
const webpackMerge = require("webpack-merge")

const NameAllModulesPlugin = require("name-all-modules-plugin")
const { CheckerPlugin } = require("awesome-typescript-loader")
const DiskPlugin = require("webpack-disk-plugin")
const HardSourceWebpackPlugin = require("hard-source-webpack-plugin")
const DashboardPlugin = require("webpack-dashboard/plugin")
const noop = require("noop-webpack-plugin")

const commonDevProdConfig = require("./webpack.common.devprod.config")

const ENV_MODE = (process.env.NODE_ENV = process.env.ENV = "development")
const isLLDEBUG = process.env.LL === "debug"
const isWITHDASHBOARD = !!process.env.WITHDASHBOARD

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
  stats: "normal",
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
    polyfills: helpers.root("src/polyfills-dev.ts"),
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
              reportFiles: ["src/**/*.{ts,tsx}"],
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
    path: helpers.root("dist", "public"),
    publicPath,
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        ENV: JSON.stringify(ENV_MODE),
      },
    }),

    new webpack.NamedModulesPlugin(),

    new NameAllModulesPlugin(),

    new webpack.HotModuleReplacementPlugin(),

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

    isWITHDASHBOARD ? noop() : new DashboardPlugin({ port: 4002 }),
  ],
  stats: isLLDEBUG && !isWITHDASHBOARD ? "verbose" : "normal",
}

let webpackConfig = [webpackMerge(commonDevProdConfig, devConfig)]

webpackConfig = [
  webpackMerge.smart(
    {
      module: {
        rules: [
          {
            exclude: /node_modules/,
            include: helpers.root("src", "assets", "css"),
            test: /\.css$/,
            use: [{ loader: "extracted-loader" }],
          },
        ],
      },
    },
    ...webpackConfig,
  ),
]

if (isLLDEBUG) {
  const output = prettyFormat(webpackConfig, { highlight: true })
  // tslint:disable-next-line:no-console
  console.debug(output)
}

module.exports = webpackConfig
