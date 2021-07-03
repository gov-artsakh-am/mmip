const path = require('path');

module.exports = {
	entry: path.resolve(__dirname, './src/index.js'),
	module: {
		rules: [
			{
				test: /\.(js)$/,
				exclude: /node_modules/,
				use: ['babel-loader']
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader"]
			},
		]
	},
	resolve: {
		extensions: ['*', '.js']
	},
	output: {
		path: path.resolve(__dirname, './public'),
		filename: 'bundle.js',
	},
	watch: true,
	watchOptions: {
		ignored: '/node_modules/',
	},
	devServer: {
		contentBase: path.resolve(__dirname, './public'),
		port: 3000,
	},
};