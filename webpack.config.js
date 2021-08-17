const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
var ghpages = require('gh-pages');
ghpages.publish('dist', function(err) {});

module.exports = {
  
  entry: "./src/js/index.js",
  output: {
    filename: "bungle.[contenthash].js",
    path: path.resolve(__dirname, "dist"),
    // assetModuleFilename: "img/[name][ext][query]",
  },
  devtool: "source-map",

  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
    new CleanWebpackPlugin({}),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "src/img"),
          to: path.resolve(__dirname, "dist/img"),
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "style.[contenthash].css",
    }),
  ],

  module: {
    rules: [
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.(png|jpg|jpeg|webp)$/,
        use: [
          {
            loader: "file-loader?name=./img/[name].[ext]",
          },
        ],
        type: "javascript/auto",
      },
      //   {
      //     test: /\.(png|svg|jpg|jpeg|gif)$/i,
      //     type: "asset/resource",

      //   },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: "asset/resource",
      },
      //   {
      //     test: /\.(woff|woff2|eot|ttf|otf)$/i,
      //     loader: 'file-loader',
      //     options: {
      //       name: '[path][name].[ext]',
      //     },
      //   },
    ],
  },
};
