var path = require("path");
var webpack = require("webpack");
var autoprefixer = require('autoprefixer');
var precss = require('precss');
 
module.exports = {
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    './src/index' 
  ],
  devServer: {
    historyApiFallback: true,
    hot: true
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    publicPath: '/build/',
    //publicPath: 'http://localhost:${env.WEBPACK_PORT}/build/',
    filename: "bundle.js"
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel']
      }, {
        test: /\.scss$/,
        loaders: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  postcss: function () {
    return [autoprefixer, precss];
  }  
};