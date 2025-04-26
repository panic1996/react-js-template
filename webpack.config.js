const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const mode = process.env.NODE_ENV;

module.exports = {
	mode: mode,
	entry: path.join(__dirname, "src", "index.js"),
	output: {
		path: path.join(__dirname, "dist/"),
		publicPath: mode === "production" ? "./" : "/",
		filename: "assets/js/[name].[contenthash:8].js",
		clean: true,
	},
	resolve: {
		alias: {
			"@/src": path.resolve(__dirname, "src"),
			"@/app": path.resolve(__dirname, "src", "app"),
			"@/pages": path.resolve(__dirname, "src", "pages"),
			"@/widgets": path.resolve(__dirname, "src", "widgets"),
			"@/features": path.resolve(__dirname, "src", "features"),
			"@/shared": path.resolve(__dirname, "src", "shared"),
		},
		extensions: [".js", ".jsx", ".scss"],
	},
	devServer: {
		port: 5000,
		hot: true,
		historyApiFallback: true,
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "public",
					to: path.resolve(__dirname, "dist"),
				},
			],
		}),
	],
	module: {
		rules: [
			{
				test: /\.s[ac]ss|css$/i,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							modules: {
								auto: true,
								localIdentName: "[local]__[hash:base64:5]",
								namedExport: false,
							},
						},
					},
					"postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
					options: {
						cacheDirectory: true,
						presets: [
							"@babel/preset-env",
							["@babel/preset-react", { runtime: "automatic" }],
						],
					},
				},
			},
			{
				test: /\.(png|jpg|jpeg|ico|webp)/,
				type: "asset/resource",
			},
			{
				test: /\.svg$/i,
				issuer: /\.[jt]sx?$/,
				use: ["@svgr/webpack"],
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/fonts/[name][ext][query]",
				},
			},
		],
	},
};
