const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== "production";
const SRC_DIR = __dirname + "/src";
const DIST_DIR = __dirname + "/dist";

module.exports = {
  entry: [SRC_DIR + "/index.jsx"],
  output: {
    path: DIST_DIR,
    publicPath: "/",
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.s?css$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
      },
      {
        test: /\.(html)$/,
        exclude: /node_modules/,
        use: {
          loader: "html-loader",
          options: { minimize: true },
        },
      },
      {
        test: /fonts[\\\/].+\.(otf|eot|svg|ttf|woff|woff2)$/i,
        exclude: /node_modules/,
        use: {
          loader: "file-loader",
          options: {
            name: "fonts/[name][hash].[ext]",
          },
        },
      },
      {
        test: /\.svg$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "svg-url-loader",
            options: {
              limit: 10000,
            },
          },
        ],
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        exclude: /node_modules/,
        use: [
          {
            loader: "file-loader",
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new HtmlWebpackPlugin({
      template: SRC_DIR + "/index.html",
      filename: "./index.html",
    }),
    new MiniCssExtractPlugin({
      filename: "styles.css",
    }),
  ],
  devServer: {
    contentBase: DIST_DIR,
    port: 9000,
    historyApiFallback: true,
  },
};
