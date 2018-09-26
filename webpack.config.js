const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var webpack = require("webpack");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const devMode = process.env.NODE_ENV !== "production";

module.exports = {
  devtool: "source-map",
  entry: {
    app: [path.join(__dirname, "./src/app.js")],
    vendor: ["react", "react-router-dom", "redux", "react-dom", "react-redux"]
  },
  output: {
    path: path.join(__dirname, "./build"),
    filename: "[name].[chunkhash].js",
    chunkFilename: "[name].[chunkhash].js",
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        use: ["babel-loader"],
        include: path.join(__dirname, "src")
      },
      {
        test: /\.s[c|a]ss$/,
        use: [
          devMode ? "style-loader" : MiniCssExtractPlugin.loader,
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: "index.html",
      template: path.join(__dirname, "./index.html")
    }),
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin(["build"]),
    new MiniCssExtractPlugin({
      filename: devMode ? "[name].css" : "[name].[hash].css",
      chunkFilename: devMode ? "[id].css" : "[id].[hash].css"
    })
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: { name: "vendor", chunks: "initial", minChunks: 2 }
      }
    }
  },
  resolve: {
    alias: {
      pages: path.join(__dirname, "src/pages"),
      component: path.join(__dirname, "src/component"),
      router: path.join(__dirname, "src/router"),
      actions: path.join(__dirname, "src/redux/actions"),
      reducers: path.join(__dirname, "src/redux/reducers")
    }
  }
};
