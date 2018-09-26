const commonConfig = require("./webpack.common.config")
const helpers = require("./helpers")
const webpack = require("webpack")
const webpackMerge = require("webpack-merge")
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const ENV = (process.env.NODE_ENV = process.env.ENV = "production")

module.exports = webpackMerge(commonConfig, {
	devtool: "source-map",
	output: {
		chunkFilename: "[id].[hash].chunk.js",
		filename: "[name].[hash].js",
		path: helpers.root("dist"),
		publicPath: "/",
	},
	plugins: [
		new webpack.NoEmitOnErrorsPlugin(),

		new webpack.optimize.UglifyJsPlugin({
			// https://github.com/angular/angular/issues/10618
			mangle: {
				keep_fnames: true,
			},
		}),

		new ExtractTextPlugin("[name].[hash].css"),

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
	],
})
