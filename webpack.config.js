const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './app/js/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js'
  },
  devServer: {
    contentBase: path.join(__dirname, "app"),
    compress: true,
    port: 9000,
    hot: true
  },
  module: {
    rules: [
      {
          test: /\.sass$/,
          use: [{
            loader: "style-loader" // creates style nodes from JS strings
          }, {
            loader: "css-loader" // translates CSS into CommonJS
          }, {
            loader: "sass-loader", // compiles Sass to CSS
            options: {
              includePaths: ["./app/sass/main.sass"]
            }
          }]
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        }
      },
      { test: /\.jpg$/, use: [ "file-loader" ] },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [
        'file-loader'
        ]
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-es2015']
          }
        }
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './app/index.html',
    })
  ]
};












