var webpack = require("webpack");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = {
  entry: {
    app: ["react-hot-loader/patch", path.join(__dirname, "./src/app.js")],
    vendor: ["react", "react-router-dom", "redux", "react-dom", "react-redux"]
  },
  output: {
    path: path.join(__dirname + "/build"),
    publicPath: "/",
    filename: "[name].[hash].js",
    chunkFilename: "js/[name]-[chunkhash]" + ".js"
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./index.html",
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      },
      filename: "index.html"
    }),
    new webpack.HotModuleReplacementPlugin(),
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
      pages: path.resolve(__dirname, "src/pages"),
      component: path.resolve(__dirname, "src/component"),
      router: path.resolve(__dirname, "src/router")
    }
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        query: {
          plugins: ["transform-runtime"],
          presets: ["es2015", "react", "stage-2"]
        }
      },
      {
        test: /\.s[c|a]ss$/,
        use: ["style-loader", "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "static/img/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "static/media/[name].[hash:7].[ext]"
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: "url-loader",
        options: {
          limit: 10000,
          name: "static/fonts/[name].[hash:7].[ext]"
        }
      }
    ]
  },
  devServer: {
    // contentBase: path.join(__dirname, ""),
    contentBase: false, //since we use CopyWebpackPlugin.
    clientLogLevel: "warning",
    publicPath: "/",
    hot: true,
    progress: true,
    overlay: { warnings: false, errors: true },
    historyApiFallback: {
      rewrites: [{ from: /.*/, to: path.posix.join("/", "index.html") }]
    },
    // historyApiFallback: true,
    // quiet: true, // necessary for FriendlyErrorsPlugin
    compress: true,
    inline: true,
    port: 8083,
    host: "127.0.0.1",
    watchOptions: {
      poll: false
    }
  }
};
