const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'source-map',

  entry: [
    './src/index'
  ],
  devServer: {
    historyApiFallback: true,
    hot: true
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: 'build.js',
    publicPath: '/build/'
  },

  plugins: [
    new webpack.optimize.DedupePlugin(),
    
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    }),
  ],

  module: {
    loaders: [
      { test: /\.js?$/,
        loader: 'babel',
        exclude: /node_modules/ },
      { test: /\.scss?$/,
        loader: 'style!css!sass'}
    ]
  }
}