const { merge } = require('webpack-merge');
const path = require('path');

const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		port: 5000,
		static: path.join(__dirname, 'public'),
		historyApiFallback: true,
		open: true,
		hot: true,
		liveReload: true,
	},
});
