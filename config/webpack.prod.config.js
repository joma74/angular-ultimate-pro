const commonConfig = require("./webpack.common.config")
const helpers = require("./helpers")
const webpack = require("webpack")
const webpackMerge = require("webpack-merge")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const prettyFormat = require("pretty-format")
const PurgecssPlugin = require("purgecss-webpack-plugin")
const StatsPlugin = require("stats-webpack-plugin")
const glob = require("glob")

const ENV = (process.env.NODE_ENV = process.env.ENV = "production")

/**
 * @type {import ("webpack").Configuration}
 */
const prodConfig = {
  devtool: "source-map",
  output: {
    chunkFilename: "[id].[hash].chunk.js",
    filename: "[name].[hash].js",
    path: helpers.root("dist"),
    publicPath: "/",
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),

    new UglifyJsPlugin({
      // https://github.com/angular/angular/issues/10618
      uglifyOptions: {
        mangle: {
          keep_fnames: true,
        },
      },
    }),

    new ExtractTextPlugin("[name].[contenthash].css"),

    new PurgecssPlugin({
      paths: glob.sync(`${helpers.root("/src/")}/**/*.{ejs,html,css,ts}`),
    }),

    new webpack.DefinePlugin({
      "process.env": {
        ENV: JSON.stringify(ENV),
      },
    }),

    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false, // workaround for ng2
      },
    }),

    new StatsPlugin("./../target/webpack-prod-stats.json", {
      chunkModules: true,
    }),
  ],
}

const webpackConfig = [webpackMerge(commonConfig, prodConfig)]

const output = prettyFormat(webpackConfig, { highlight: true })

// tslint:disable-next-line:no-console
console.log(output)

module.exports = webpackConfig
