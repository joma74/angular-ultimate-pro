const ENVLL = require("./env/ENVLL")
const ENVMODE = require("./env/ENVMODE")
const ENVAPPSRVPORT = require("./env/ENVAPPSRVPORT")
const ENVWITHDASHBOARD = require("./env/ENVWITHDASHBOARD")
const ENVDASHBOARDSVRPORT = require("./env/ENVDASHBOARDSVRPORT")

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

/**
 * set MODE first!!
 */
const ENV_MODE = ENVMODE.setToDevelopment()

const commonDevProdConfig = require("./webpack.common.devprod.config")

/**
 * Current Project Dir
 */
const contentNotFromWebpackIsServedFrom = helpers.rootAbs("src")
const publicPath = "/"

/**
 * @type {import("webpack-dev-server").Configuration}
 */
const devServer = {
  before(app) {
    app.use("/api", jsonServer.router(helpers.rootAbs("db.json")))
  },
  clientLogLevel: "warning",
  compress: true,
  contentBase: contentNotFromWebpackIsServedFrom,
  historyApiFallback: true,
  host: "localhost",
  hot: true,
  port: parseInt(ENVAPPSRVPORT.getVDev()),
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
    app: helpers.rootAbs("src", "main-dev.ts"),
    polyfills: helpers.rootAbs("src", "polyfills-dev.ts"),
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
              configFileName: helpers.rootAbs("tsconfig.json"),
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
    path: helpers.rootAbs("dist", "public"),
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
        path: helpers.rootAbs("target"),
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
  ],
  stats:
    ENVLL.isDebugEnabled() && ENVWITHDASHBOARD.isNotSet()
      ? "verbose"
      : "normal",
}

if (ENVWITHDASHBOARD.isSet()) {
  devConfig.plugins.push(
    new DashboardPlugin({ port: ENVDASHBOARDSVRPORT.get() }),
  )
}

let webpackConfig = [webpackMerge(...commonDevProdConfig, devConfig)]

webpackConfig = [
  webpackMerge.smart(
    {
      module: {
        rules: [
          {
            exclude: /node_modules/,
            include: helpers.rootAbs("src", "assets", "css"),
            test: /\.css$/,
            use: [{ loader: "extracted-loader" }],
          },
        ],
      },
    },
    ...webpackConfig,
  ),
]

if (ENVLL.isDebugEnabled()) {
  const output = prettyFormat(webpackConfig, {
    highlight: true,
    maxDepth: ENVLL.isTraceEnabled() ? Infinity : 5,
  })
  // tslint:disable-next-line:no-console
  console.debug(output)
}

module.exports = webpackConfig
