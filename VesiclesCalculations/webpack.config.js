const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  devtool: debug ? "inline-sourcemap" : false,
  entry: "./App/index.js", 
  output: {
    path: path.join(__dirname + "/dist"),
    filename: "index_bundle.js"
  },
  module: {
    rules: [
      {
        test: /\.ts(x)$/,
        loader: "babel-loader!ts-loader",
        include: path.join(__dirname, "App"),
        exclude: /node_modules/
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
        include: path.join(__dirname, "App"),
        exclude: /node_modules/,
      },
      {
        test: /\.(s*)css/,
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './App/index.html'}),
    new ExtractTextPlugin({filename: 'app.bundle.css'})
  ]
};