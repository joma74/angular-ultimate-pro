const ENVLL = require("./env/ENVLL")
const ENVMODE = require("./env/ENVMODE")

const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const PreloadWebpackPlugin = require("preload-webpack-plugin")
const helpers = require("./helpers")
/**
 * https://web.archive.org/web/20180216190554/https://webpack.js.org/concepts/
 */
const webpack = require("webpack")
const webpackMerge = require("webpack-merge")

const commonConfig = require("./webpack.common.config")

const extractCSS = new ExtractTextPlugin({
  allChunks: true,
  filename: ENVMODE.hasVDevelopment()
    ? "assets/css/[name].css"
    : "assets/css/[name].[contenthash:6].css",
})

/**
 * @type {import ("webpack").Configuration}
 */
const commonDevProdConfig = {
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              context: "src",
              name: "[path]/[name].[hash:6].[ext]",
            },
          },
        ],
      },
      {
        exclude: /node_modules/,
        include: helpers.rootAbs("src", "assets", "css"),
        test: /\.css$/,
        use: [
          ...extractCSS.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  minimize: ENVMODE.hasVProduction(),
                  sourceMap: ENVMODE.hasVProduction(),
                },
              },
              {
                loader: "postcss-loader",
                options: {
                  config: {
                    path: "./config/",
                  },
                },
              },
            ],
          }),
        ],
      },
      {
        include: helpers.rootAbs("src", "app"),
        test: /\.css$/,
        use: "raw-loader",
      },
    ],
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      chunks: ["app", "angular-chunk"],
      minChunks: function(module) {
        if (ENVLL.isTraceEnabled()) {
          // tslint:disable-next-line:no-console
          console.debug("[rxjs-chunk] " + JSON.stringify(module.resource))
        }
        const result =
          module.resource && /node_modules\/rxjs/.test(module.resource)
        if (ENVLL.isTraceEnabled()) {
          // tslint:disable-next-line:no-console
          console.debug("[rxjs-chunk] Accepted ? " + result)
        }
        return result
      },
      name: "rxjs-chunk",
    }),

    new webpack.optimize.CommonsChunkPlugin({
      chunks: ["app"],
      minChunks: function(module) {
        if (ENVLL.isTraceEnabled()) {
          // tslint:disable-next-line:no-console
          console.debug("[angular-chunk] " + JSON.stringify(module.resource))
        }
        const result =
          (module.resource && /node_modules\/@angular/.test(module.resource)) ||
          /node_modules\/zone\.js/.test(module.resource) ||
          /node_modules\/tslib/.test(module.resource)
        if (ENVLL.isTraceEnabled()) {
          // tslint:disable-next-line:no-console
          console.debug("[angular-chunk] Accepted ? " + result)
        }
        return result
      },
      name: "angular-chunk",
    }),

    new webpack.optimize.CommonsChunkPlugin({
      name: "wp-runtime",
    }),

    new HtmlWebpackPlugin({
      chunksSortMode: function(a, b) {
        const chunksNamePart = [
          "wp-runtime",
          "polyfills",
          "rxjs-chunk",
          "angular-chunk",
          "app",
        ]
        return (
          (chunksNamePart.indexOf(a.names[0]) -
          chunksNamePart.indexOf(b.names[0]))
        )
      },
      hash: false,
      inject: true,
      template: "src/index.ejs",
    }),

    new PreloadWebpackPlugin({
      fileBlacklist: [/\.hot-update.js/, /\.map/],
      include: "allChunks",
      rel: "preload",
    }),

    extractCSS,
  ],
}

let webpackConfig = [webpackMerge(commonConfig, commonDevProdConfig)]

module.exports = webpackConfig
