var webpack = require("webpack")
var helpers = require("./helpers")

/**
 * @type {import ("webpack").Configuration}
 */
const webpackConfig = {
	devtool: "inline-source-map",
	module: {
		rules: [
			{
				test: /\.ts$/,
				use: [
					{
						loader: "awesome-typescript-loader",
						options: { configFileName: helpers.root("tsconfig.json") },
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
				use: "null-loader",
			},
			{
				exclude: /node_modules/,
				include: helpers.root("src", "app"),
				loaders: ["raw-loader", "sass-loader"], // sass-loader not scss-loader
				test: /\.scss$/,
			},
			{
				exclude: helpers.root("src", "app"),
				test: /\.css$/,
				use: "null-loader",
			},
			{
				include: helpers.root("src", "app"),
				test: /\.css$/,
				use: "raw-loader",
			},
		],
	},
	plugins: [
		new webpack.ContextReplacementPlugin(
			// The (\\|\/) piece accounts for path separators in *nix and Windows
			/angular(\\|\/)core(\\|\/)@angular/,
			helpers.root("./src"), // location of your src
			{}, // a map of your routes
		),
	],
	resolve: {
		extensions: [".ts", ".js"],
	},
}

module.exports = webpackConfig
