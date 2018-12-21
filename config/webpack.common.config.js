const helpers = require("./helpers")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const PreloadWebpackPlugin = require("preload-webpack-plugin")

const webpack = require("webpack")

const isDev = process.env.NODE_ENV === "development"

const extractCSS = new ExtractTextPlugin(
  isDev ? "assets/css/[name].css" : "assets/css/[name].[contenthash].css",
)

/**
 * @type {import ("webpack").Node}
 */
const node = {
  clearImmediate: false,
  crypto: "empty",
  global: true,
  module: false,
  process: true,
  setImmediate: false,
}

/**
 * @type {import ("webpack").Configuration}
 */
const webpackConfig = {
  entry: {
    polyfills: helpers.root("src/polyfills.ts"),
  },
  module: {
    rules: [
      {
        test: /\.html$/,
        use: "html-loader",
      },
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              context: "src",
              name: "[path]/[name].[hash].[ext]",
            },
          },
        ],
      },
      {
        exclude: /node_modules/,
        include: helpers.root("src", "app"),
        loaders: ["raw-loader", "sass-loader"], // sass-loader not scss-loader
        test: /\.scss$/,
      },
      {
        exclude: /node_modules/,
        include: helpers.root("src", "assets", "css"),
        test: /\.css$/,
        use: [
          "extracted-loader",
          ...extractCSS.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  minimize: !isDev,
                  sourceMap: isDev,
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
        include: helpers.root("src", "app"),
        test: /\.css$/,
        use: "raw-loader",
      },
    ],
  },
  node,
  plugins: [
    // Workaround for angular/angular#11580
    new webpack.ContextReplacementPlugin(
      // The (\\|\/) piece accounts for path separators in *nix and Windows
      /angular(\\|\/)core(\\|\/)@angular/,
      helpers.root("./src"), // location of your src
      {}, // a map of your routes
    ),

    new webpack.optimize.CommonsChunkPlugin({
      chunks: ["app", "polyfills"],
      minChunks: function(module) {
        // tslint:disable-next-line:no-console
        console.debug("[rxjs-chunk] " + JSON.stringify(module.context))
        // tslint:disable-next-line:no-console
        console.debug("[rxjs-chunk] " + JSON.stringify(module.resource))
        const result =
          module.resource && /node_modules\/rxjs/.test(module.resource)
        // tslint:disable-next-line:no-console
        console.debug("[rxjs-chunk] Accepted ? " + result)
        return result
      },
      name: "rxjs-chunk",
    }),

    new webpack.optimize.CommonsChunkPlugin({
      chunks: ["app", "polyfills"],
      minChunks: function(module) {
        // tslint:disable-next-line:no-console
        console.debug("[tslib-polyfills] " + JSON.stringify(module.context))
        // tslint:disable-next-line:no-console
        console.debug("[tslib-polyfills] " + JSON.stringify(module.resource))
        const result =
          module.resource && /node_modules\/tslib/.test(module.resource)
        // tslint:disable-next-line:no-console
        console.debug("[tslib-polyfills] Accepted ? " + result)
        return result
      },
      name: "polyfills",
    }),

    new webpack.optimize.CommonsChunkPlugin({
      chunks: ["app"],
      minChunks: function(module) {
        // tslint:disable-next-line:no-console
        console.debug("[angular-chunk] " + JSON.stringify(module.context))
        // tslint:disable-next-line:no-console
        console.debug("[angular-chunk] " + JSON.stringify(module.resource))
        const result =
          module.resource && /node_modules\/@angular/.test(module.resource)
        // tslint:disable-next-line:no-console
        console.debug("[angular-chunk] Accepted ? " + result)
        return result
      },
      name: "angular-chunk",
    }),

    new webpack.optimize.CommonsChunkPlugin({
      minChunks: Infinity,
      name: "manifest",
    }),

    new HtmlWebpackPlugin({
      chunksSortMode: function(a, b) {
        const chunksNamePart = [
          "manifest",
          "polyfills",
          "rxjs-chunk",
          "tslib-chunk",
          "angular-chunk",
          "app",
        ]
        return (
          chunksNamePart.indexOf(a.names[0]) -
          chunksNamePart.indexOf(b.names[0])
        )
      },
      inject: true,
      template: "src/index.ejs",
    }),

    new PreloadWebpackPlugin({
      fileBlacklist: [/\.hot-update.js/],
      include: "allChunks",
      rel: "preload",
    }),

    new webpack.NamedModulesPlugin(),

    extractCSS,
  ],
  resolve: {
    extensions: [".ts", ".js"],
    modules: [helpers.root("src"), helpers.root("node_modules")],
  },
}

module.exports = webpackConfig
