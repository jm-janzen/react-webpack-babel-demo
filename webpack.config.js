var path = require('path');
var webpack = require('webpack');
 
module.exports = {
	entry: ['./main.js', './styles.scss'],
	output: { path: __dirname, filename: 'bundle.js' },
	module: {
		rules: [
			{
				test: /\.(sass|scss)$/,
				use: [
					{ loader: "style-loader" },
					{ loader: "css-loader" },
					{ loader: "sass-loader" }
				]
			},
			{
				test: /.jsx?$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				query: {
					presets: ['env', 'react']
				}
			},
		]
	},
	devServer: {
		port: '8080',
		host: '0.0.0.0',
		overlay: { warnings: true, errors: true }
	}
};
