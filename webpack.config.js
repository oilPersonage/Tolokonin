const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = {
  entry: './app/js/main.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'main.js',
  },
  devServer: {
    contentBase: path.join(__dirname, 'app'),
    compress: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.sass$/i,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: [{
            loader: 'css-loader',
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: [
                autoprefixer({
                  browsers: ['ie >= 8', 'last 4 version'],
                }),
              ],
              sourceMap: true,
            },
          },
          {
            loader: 'sass-loader',
          }],
        }),
      },
      {
        test: /\.(html)$/,
        use: {
          loader: 'html-loader',
        },
      },
      { test: /\.(png|jpg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'img/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/',
          },
        },
        ],
      },
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-es2015'],
          },
        },
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './app/index.html',
    }),
    new ExtractTextPlugin('main.css'),
    new webpack.ProvidePlugin({
      $: 'jquery/dist/jquery.min.js',
      jQuery: 'jquery/dist/jquery.min.js',
      'window.jQuery': 'jquery/dist/jquery.min.js',
    }),
  ],
};

