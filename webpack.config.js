// const extractTextPlugin = require('extract-text-webpack-plugin');
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
  output:{
    path: __dirname,
    publicPath: 'http://node.dreamjser.com/',
    filename: paths.output + '[name].js',
    chunkFilename: paths.ensure + '[hash].js',
    pathinfo: true
  },
  module: {
    rules: [{
        test: /\.(js|jsx)$/,
        use: [
          'babel-loader',
        ]
      }]
  },
  watch:true,
  devServer: {
    port: 8000
  }
}

module.exports = config;
