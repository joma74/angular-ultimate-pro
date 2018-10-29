const commonConfig = require("./webpack.common.config")
const helpers = require("./helpers")
const jsonServer = require("json-server")
const path = require("path")
const webpack = require("webpack")
const webpackMerge = require("webpack-merge")
const { CheckerPlugin } = require("awesome-typescript-loader")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const DiskPlugin = require("webpack-disk-plugin")
const prettyFormat = require("pretty-format")

/**
 * Current Project Dir
 */
const cpd = path.join(__dirname, "../")
const contentNotFromWebpackIsServedFrom = path.join(__dirname, "../src/")
const publicPath = "/"

/**
 * @type {import("webpack-dev-server").Configuration}
 */
const devServer = {
  before(app) {
    app.use("/api", jsonServer.router(cpd + "/db.json"))
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
        path: path.resolve(cpd, "target"),
      },
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],
}

const webpackConfig = [webpackMerge(commonConfig, devConfig)]

const output = prettyFormat(webpackConfig, { highlight: true })

// tslint:disable-next-line:no-console
console.log(output)

module.exports = webpackConfig
