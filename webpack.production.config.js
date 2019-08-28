const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const CompressionPlugin = require('compression-webpack-plugin');
var path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: process.env.NODE_ENV,
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
      },
    ],
  },
  output: {
    path: __dirname + '/dist',
    library: 'imageboy',
    libraryTarget: 'umd',
    filename: 'imageboy.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CompressionPlugin(),
    new BundleAnalyzerPlugin(),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
  },
};
