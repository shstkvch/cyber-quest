const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const sassLoader = require('sass-loader');

const config = {
  entry: "./src/index.js",
  output: {
    // path: path.resolve(__dirname, './dist'),
    filename: "public.js"
    // publicPath: "dist/"
  },
  devServer: {
    port: 3000
  },
  devtool: "source-map",
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract(["css-loader", "sass-loader"]),
      }
      // { enforce: "pre", test: /\.js$/, loader: "source-map-loader" }
    ],

  },

  resolve: {
    extensions: [".js", ".json"],
  },
  plugins: [
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({template: "./src/index.html"}),
    new HtmlWebpackPlugin({filename: 'step-1.html', template: "./src/step-1.html" }),
    new CopyWebpackPlugin([{ from: "src/styles/assets/", to: "assets" }])
  ]
};

module.exports = config;
