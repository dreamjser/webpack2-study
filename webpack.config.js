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
    index: paths.entry + 'index.js'
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
    })
  ],
  resolve: {
    modules: [__dirname],
    alias: {
      'mask': 'src/component/mask/mask.js',
    }
  },
  profile: true,
  watch: true,
  watchOptions: {
    aggregateTimeout: 5000,
    ignored: './node_modules/',
  },
  devServer: {
    port: 8000
  },
  devtool: 'inline-source-map',
}

module.exports = config;
