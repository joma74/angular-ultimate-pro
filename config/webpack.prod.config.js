const ENVLL = require("./env/ENVLL")
const ENVMODE = require("./env/ENVMODE")

const glob = require("glob")
const helpers = require("./helpers")
const prettyFormat = require("pretty-format")
/**
 * https://web.archive.org/web/20180216190554/https://webpack.js.org/concepts/
 */
const webpack = require("webpack")
const webpackMerge = require("webpack-merge")

const AotPlugin = require("@ngtools/webpack").AotPlugin
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const PurgecssPlugin = require("purgecss-webpack-plugin")
const StatsPlugin = require("stats-webpack-plugin")
const FileManagerPlugin = require("filemanager-webpack-plugin")

/**
 * set MODE first!!
 */
const ENV_MODE = ENVMODE.setToProduction()

const commonDevProdConfig = require("./webpack.common.devprod.config")

/**
 * @type {import ("webpack").Configuration}
 */
const prodConfig = {
  devtool: false,
  entry: {
    app: helpers.rootAbs("src/main-prod.ts"),
    polyfills: helpers.rootAbs("src/polyfills-prod.ts"),
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
    path: helpers.rootAbs("dist"),
    publicPath: "/",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        ENV: JSON.stringify(ENV_MODE),
      },
    }),

    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.optimize.ModuleConcatenationPlugin(),

    new webpack.HashedModuleIdsPlugin(),

    new AotPlugin({
      mainPath: helpers.rootAbs("src/main-prod.ts"),
      skipCodeGeneration: false,
      sourceMap: true,
      tsConfigPath: helpers.rootAbs("tsconfig.prod.json"),
    }),

    // see https://github.com/webpack-contrib/uglifyjs-webpack-plugin/tree/v1.2.1
    new UglifyJsPlugin({
      sourceMap: true,
      // https://github.com/angular/angular/issues/10618
      uglifyOptions: {
        comments: false,
        compress: {
          passes: 1,
          warnings: false,
        },
        mangle: {
          keep_fnames: true,
        },
        nameCache: {},
        parallel: true,
      },
    }),

    // For options see node_modules/webpack/lib/SourceMapDevToolPlugin.js
    new webpack.SourceMapDevToolPlugin({
      // only accepted param is [url]
      // append: `\n//# sourceMappingURL=http://localhost:${ENVAPPSRVPORT.getVProd()}/[url]`,
      filename: "sourcemaps/[file].map",
      // onec css is included in regex, all breaks?!
      test: /\.(js|jsx)($|\?)/i,
    }),

    new PurgecssPlugin({
      paths: glob.sync(`${helpers.rootAbs("/src/")}/**/*.{ejs,html,css,ts}`),
    }),

    new webpack.LoaderOptionsPlugin({
      htmlLoader: {
        minimize: false, // workaround for ng2
      },
    }),

    new StatsPlugin(helpers.rootRel("target", "webpack-prod-stats.json")),

    new FileManagerPlugin({
      onEnd: {
        copy: [
          {
            destination: helpers.rootAbs("dist", "assets", "images"),
            source: helpers.rootAbs("src", "assets", "images", "**/*"),
          },
        ],
      },
    }),
  ],
  stats: ENVLL.isDebugEnabled() ? "verbose" : "normal",
}

const webpackConfig = [webpackMerge(...commonDevProdConfig, prodConfig)]

if (ENVLL.isDebugEnabled()) {
  const output = prettyFormat(webpackConfig, {
    highlight: true,
    maxDepth: ENVLL.isTraceEnabled() ? Infinity : 5,
  })
  // tslint:disable-next-line:no-console
  console.debug(output)
}

module.exports = webpackConfig
