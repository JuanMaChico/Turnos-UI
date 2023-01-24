/**
 * Config de WebPack
 */
const htmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");
const Path = require("path");

const htmlPlugin = new htmlWebpackPlugin({
	title: "App Turnos",

	filename: "index.html",

	template: Path.join(__dirname, "public/index.html"),

	inject: true,
});

const CopyPlugin = require("copy-webpack-plugin");

module.exports = {
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: "babel-loader",
				options: {
					presets: [
						[
							"@babel/preset-react",
							{
								runtime: "automatic",
							},
						],
					],
				},
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
				type: "asset/resource",
			},
		],
	},
	plugins: [
		htmlPlugin,
		new Dotenv(),
		new CopyPlugin({
			patterns: [
				{ from: "public/sw.js", to: "" },
				{ from: "public/manifest.json", to: "" },
				{ from: "public/iconNavbar.png", to: "" },
			],
		}),
	],
	entry: "./src/index.js",
	output: {
		//publicPath: "https://JuanMaChico.github.io/turnos-app",
		path: Path.resolve(__dirname, "build"),
		filename: "index_bundle.js",
	},
	devServer: {
		historyApiFallback: true,
	},
	resolve: {
		alias: {
			// Componentes
			Components: Path.join(__dirname, "src/components"),
			// Assets
			Assets: Path.join(__dirname, "src/assets"),
			// Services
			Services: Path.join(__dirname, "src/services")
		},
		extensions: [".js", ".jsx", ".json"],
	},
};
