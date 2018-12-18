const commonConfig = require("./webpack.common.config")
const helpers = require("./helpers")
const webpack = require("webpack")
const webpackMerge = require("webpack-merge")
const AotPlugin = require("@ngtools/webpack").AotPlugin
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const prettyFormat = require("pretty-format")
const PurgecssPlugin = require("purgecss-webpack-plugin")
const StatsPlugin = require("stats-webpack-plugin")
const glob = require("glob")
const FileManagerPlugin = require("filemanager-webpack-plugin")

const ENV_MODE = (process.env.NODE_ENV = process.env.ENV = "production")

/**
 * @type {import ("webpack").Configuration}
 */
const prodConfig = {
  entry: {
    app: helpers.root("src/main-prod.ts"),
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
            loader: "@ngtools/webpack",
          },
        ],
      },
    ],
  },
  output: {
    chunkFilename: "[id].[hash].chunk.js",
    filename: "[name].[hash].js",
    path: helpers.root("dist"),
    publicPath: "/",
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),

    new AotPlugin({
      compilerOptions: {
        genDir: helpers.root("./dist/tsjsprod/aot/genDir"),
        strictMetadataEmit: true,
      },
      entryModule: helpers.root("src/app/app.module#AppModule"),
      tsConfigPath: helpers.root("tsconfig.prod.json"),
    }),

    new UglifyJsPlugin({
      // https://github.com/angular/angular/issues/10618
      uglifyOptions: {
        mangle: {
          keep_fnames: true,
        },
      },
    }),

    new PurgecssPlugin({
      paths: glob.sync(`${helpers.root("/src/")}/**/*.{ejs,html,css,ts}`),
    }),

    new webpack.DefinePlugin({
      "process.env": {
        ENV: JSON.stringify(ENV_MODE),
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

    new FileManagerPlugin({
      onEnd: {
        copy: [
          {
            destination: helpers.root("dist", "assets", "images"),
            source: helpers.root("src", "assets", "images", "**/*"),
          },
        ],
      },
    }),
  ],
  stats: {
    chunksSort: "size",
    modulesSort: "size",
  },
}

const webpackConfig = [webpackMerge(commonConfig, prodConfig)]

const output = prettyFormat(webpackConfig, { highlight: true })

// tslint:disable-next-line:no-console
console.log(output)

module.exports = webpackConfig
