const helpers = require("./helpers")
const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const PreloadWebpackPlugin = require("preload-webpack-plugin")
const webpack = require("webpack")

const isNodeEnvDev = process.env.NODE_ENV === "development"

const isLLDEBUG = process.env.LL === "debug"

const extractCSS = new ExtractTextPlugin({
  allChunks: true,
  filename: isNodeEnvDev
    ? "assets/css/[name].css"
    : "assets/css/[name].[contenthash:6].css",
})

/**
 * @type {import ("webpack").Node}
 */
const node = {
  Buffer: false,
  clearImmediate: false,
  clearTimeout: true,
  crypto: "empty",
  global: true,
  module: false,
  process: true,
  setImmediate: false,
  setTimeout: true,
}

/**
 * @type {import ("webpack").Configuration}
 */
const webpackConfig = {
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
              name: "[path]/[name].[hash:6].[ext]",
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
          ...extractCSS.extract({
            fallback: "style-loader",
            use: [
              {
                loader: "css-loader",
                options: {
                  importLoaders: 1,
                  minimize: !isNodeEnvDev,
                  sourceMap: isNodeEnvDev,
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

    new webpack.NamedChunksPlugin((chunk) => {
      if (chunk.name) {
        return chunk.name
      }
      const generatedModuleName = chunk
        .mapModules(
          /**
           * @param {{ context: string; request: string; }} m
           */
          (m) => path.relative(m.context, m.request),
        )
        .join("_")
      if (isLLDEBUG) {
        // tslint:disable-next-line:no-console
        console.debug(
          "[NamedChunksPlugin] generated name of >>" + generatedModuleName,
        )
      }
      return generatedModuleName
    }),

    new webpack.optimize.CommonsChunkPlugin({
      chunks: ["app", "angular-chunk"],
      minChunks: function(module) {
        if (isLLDEBUG) {
          // tslint:disable-next-line:no-console
          console.debug("[rxjs-chunk] " + JSON.stringify(module.resource))
        }
        const result =
          module.resource && /node_modules\/rxjs/.test(module.resource)
        if (isLLDEBUG) {
          // tslint:disable-next-line:no-console
          console.debug("[rxjs-chunk] Accepted ? " + result)
        }
        return result
      },
      name: "rxjs-chunk",
    }),

    new webpack.optimize.CommonsChunkPlugin({
      chunks: ["app", "angular-chunk"],
      minChunks: function(module) {
        if (isLLDEBUG) {
          // tslint:disable-next-line:no-console
          console.debug("[tslib-chunk] " + JSON.stringify(module.resource))
        }
        const result =
          module.resource && /node_modules\/tslib/.test(module.resource)
        if (isLLDEBUG) {
          // tslint:disable-next-line:no-console
          console.debug("[tslib-chunk] Accepted ? " + result)
        }
        return result
      },
      name: "tslib-chunk",
    }),

    new webpack.optimize.CommonsChunkPlugin({
      chunks: ["app"],
      minChunks: function(module) {
        if (isLLDEBUG) {
          // tslint:disable-next-line:no-console
          console.debug("[angular-chunk] " + JSON.stringify(module.resource))
        }
        const result =
          (module.resource && /node_modules\/@angular/.test(module.resource)) ||
          /node_modules\/zone\.js/.test(module.resource)
        if (isLLDEBUG) {
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
          "tslib-chunk",
          "angular-chunk",
          "app",
        ]
        return (
          chunksNamePart.indexOf(a.names[0]) -
          chunksNamePart.indexOf(b.names[0])
        )
      },
      hash: false,
      inject: true,
      template: "src/index.ejs",
    }),

    new PreloadWebpackPlugin({
      fileBlacklist: [/\.hot-update.js/],
      include: "allChunks",
      rel: "preload",
    }),

    extractCSS,
  ],
  resolve: {
    extensions: [".ts", ".js"],
    modules: [helpers.root("src"), helpers.root("node_modules")],
  },
}

module.exports = webpackConfig
