const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const entryPath = path.resolve(__dirname, '../src/index.js');
const outputPath = path.resolve(__dirname, '../dist');

module.exports = {
	entry: entryPath,
	output: {
		path: outputPath,
		filename: 'main[hash].js',
		assetModuleFilename: 'assets/[hash][ext]',
	},
	target: 'web',
	resolve: {
		extensions: ['.js', '.jsx', '.json'],
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: 'babel-loader',
			},
			{
				test: /\.html$/i,
				loader: 'html-loader',
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			inject: 'body',
			template: path.join(__dirname, '../public', 'index.html'),
		}),
	],
};
