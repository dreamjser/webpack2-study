const extractTextPlugin = require('extract-text-webpack-plugin');

const webpack = require('webpack');
const path = require('path');

let paths = {
	entry: './src/js/entry/',
	output: './src/js/bundle/',
	ensure: './src/js/ensure/'
}

let config = {
	context: __dirname,
	entry: {
		index: paths.entry + 'index.js',
    vendor: [
      'jquery',
      'react',
      'react-dom'
    ]
	},
	output: {
		path: __dirname,
		publicPath: 'http://node.dreamjser.com/',
		filename: paths.output + '[name].js',
		chunkFilename: paths.ensure + '[hash].js',
		pathinfo: true
	},
	module: {
		rules: [{
			test: /\.(js|jsx)$/,
			exclude: './node_modules/',
			use: [
				'babel-loader',
			]
		}, {
			test: /\.css$/,
			exclude: './node_modules/',
			use: [
				'style-loader',
				extractTextPlugin.extract({
					loader: 'css-loader'
				})
			]

		}, {
			test: /\.pug$/,
			exclude: './node_modules/',
			use: [
				'pug-loader'
			]
		}]
	},
	plugins: [
		new extractTextPlugin({
			filename: './src/css/bundle.css',
			disable: false,
			allChunks: true
		}),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor']
    }),
	],
	resolve: {
		modules: [__dirname, 'node_modules'],
		alias: {
			'mask': 'src/component/mask/mask.js',
		}
	},
	watch: true,
	watchOptions: {
		aggregateTimeout: 1000,
		ignored: './node_modules/',
	},
	devServer: {
		port: 8000
	},
	devtool: 'source-map',
}

module.exports = config;
