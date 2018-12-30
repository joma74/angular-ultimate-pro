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
const isLLDEBUG = process.env.LL === "debug"

/**
 * @type {import ("webpack").Configuration}
 */
const prodConfig = {
  entry: {
    app: helpers.root("src/main-prod.ts"),
    polyfills: helpers.root("src/polyfills-prod.ts"),
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: "@ngtools/webpack",
          },
        ],
      },
    ],
  },
  output: {
    chunkFilename: "[name].[chunkhash].js",
    filename: "[name].[chunkhash].js",
    hashDigestLength: 6,
    hashFunction: "md5",
    path: helpers.root("dist"),
    publicPath: "/",
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.HashedModuleIdsPlugin(),

    new AotPlugin({
      compilerOptions: {
        genDir: helpers.root("./dist/tsjsprod/aot/genDir"),
        strictMetadataEmit: true,
      },
      mainPath: helpers.root("src/main-prod.ts"),
      tsConfigPath: helpers.root("tsconfig.prod.json"),
    }),

    new UglifyJsPlugin({
      // https://github.com/angular/angular/issues/10618
      uglifyOptions: {
        compress: {
          passes: 1,
        },
        mangle: {
          keep_fnames: true,
        },
        nameCache: {},
        parallel: true,
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

    new StatsPlugin("./../target/webpack-prod-stats.json"),

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
  stats: isLLDEBUG ? "verbose" : "normal",
}

const webpackConfig = [webpackMerge(commonConfig, prodConfig)]

if (isLLDEBUG) {
  const output = prettyFormat(webpackConfig, { highlight: true })
  // tslint:disable-next-line:no-console
  console.debug(output)
}

module.exports = webpackConfig
