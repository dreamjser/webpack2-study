const extractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

const paths = {
  entry: 'src/js/entry/',
  bundle: 'src/js/bundle/'
}

let config = {
  context: __dirname,
  entry: {
    index: paths.entry + 'index.js',
    page: paths.entry + 'page.js',
    lib: [
      'jquery',
      'react',
      'react-dom',
    ]
  },
  output: {
    path: __dirname,
    publicPath: '/',
    filename: paths.bundle + '[name].js',
    chunkFilename: paths.bundle + '[name].js',
    pathinfo: true
  },
  module: {
    noParse: [
      /^jquery$/,
      /^react$/,
      /^react-dom$/
    ],
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
      filename: 'src/css/[name].css',
      disable: false,
      allChunks: true
    }),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['lib']
    }),
  ],
  resolve: {
    modules: [__dirname, 'node_modules'],
    extensions: [".js", ".json", ".jsx", ".css"],
    alias: {
      'mask': 'src/component/mask/mask',
      'top': 'src/component/top/top',
      'jquery': 'node_modules/jquery/dist/jquery.min',
      'react': 'node_modules/react/dist/react.min',
      'react-dom': 'node_modules/react-dom/dist/react-dom.min',
    }
  },
  watch: true,
  watchOptions: {
    aggregateTimeout: 1000,
    ignored: './node_modules/',
  },
  devServer: {
    contentBase: path.join(__dirname, "src"),
    compress: true,
    port: 8000
  },
  devtool: 'cheap-module-eval-source-map',
}

module.exports = config;
