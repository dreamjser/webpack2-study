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
		chunkFilename: paths.ensure + '[name].js',
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
      'jquery': 'node_modules/jquery/dist/jquery.js',
      'react': 'node_modules/react/dist/react.js',
      'react-dom': 'node_modules/react-dom/dist/react-dom.js',
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
	devtool: 'eval()',
}

module.exports = config;
