const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");
const autoprefixer = require("autoprefixer");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const pages = ["index", "programms", "q&a", "docs", "agencies", "payment", "reviews", "route", "404"];

module.exports = {
  mode: "development",
  entry: pages.reduce((config, page) => {
    config[page] = `./src/${page}.js`;
    return config;
  }, {}),
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    clean: true,
    filename: "[name].js",
    assetModuleFilename: "assets/[name][ext]",
  },
  devServer: {
    port: 3000,
  },
  plugins: [].concat(
    pages.map(
      (page) =>
        new HTMLWebpackPlugin({
          inject: true,
          template: `./src/${page}.html`,
          filename: `${page}.html`,
          chunks: [page],
        })
    ),
    new MiniCssExtractPlugin({
      filename: `${path.assets}css/[name].css`,
    })
  ),
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
      {
        test: /\.(sc|sa|c)ss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: "css-loader",
            options: { sourceMap: true },
          },
          {
            loader: "postcss-loader",
            options: {
              sourceMap: true,
              postcssOptions: {
                plugins: [
                  autoprefixer({
                    overrideBrowserslist: ["ie >= 8", "last 4 version"],
                  }),
                ],
              },
            },
          },
          {
            loader: "sass-loader",
            options: { sourceMap: true },
          },
        ],
      },
      {
        test: /\.ttf$/i,
        type: "asset/resource",
        generator: {
          filename: "fonts/[name][ext]",
        },
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
    ],
  },
};
