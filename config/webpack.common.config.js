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
  crypto: "empty",
  fs: "empty",
  global: true,
}

/**
 * @type {import ("webpack").Configuration}
 */
const webpackConfig = {
  entry: {
    app: "./src/main.ts",
    polyfills: "./src/polyfills.ts",
    vendor: "./src/vendor.ts",
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: [
          {
            loader: "ng-router-loader",
          },
          {
            loader: "awesome-typescript-loader",
            options: {
              configFileName: helpers.root("tsconfig.json"),
              silent: true,
            },
          },
          "angular2-template-loader",
        ],
      },
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
      minChunks: Infinity,
      names: ["app", "vendor", "polyfills"],
    }),

    new HtmlWebpackPlugin({
      //   bodys: ["polyfills", "vendor", "app"],
      //   chunks: ["app", "vendor", "polyfills"],
      inject: true,
      template: "src/index.ejs",
    }),

    new PreloadWebpackPlugin({
      fileBlacklist: [/\.hot-update.js/],
      include: ["app"],
      rel: "preload",
    }),

    new webpack.NamedModulesPlugin(),

    extractCSS,
  ],
  resolve: {
    extensions: [".ts", ".js"],
    modules: [
      "node_modules", // We need to specify the node_modules since we are overriding the default.
      helpers.root("."),
    ],
  },
}

module.exports = webpackConfig
