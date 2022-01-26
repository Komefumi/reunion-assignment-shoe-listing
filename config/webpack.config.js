const webpack = require("webpack");
const HtmlWebpackPlguin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { merge: webpackMerge } = require("webpack-merge");
const {
  scriptsConfig,
  stylesConfig,
  imagesConfig,
} = require("./webpack.utils");
const {
  entryFilePath,
  tsconfigFilePath,
  webpageTemplatePath,
  distPath,
} = require("./paths");
const { ProvidePlugin } = require("webpack");

module.exports = webpackMerge(
  {
    entry: entryFilePath,
    output: {
      filename: "[name]-[fullhash:15].js",
      path: distPath,
    },
    plugins: [
      new HtmlWebpackPlguin({ template: webpageTemplatePath }),
      new CleanWebpackPlugin(),
      new webpack.ProvidePlugin({ React: "react" }),
    ],
    resolve: {
      plugins: [new TsconfigPathsPlugin({ configFile: tsconfigFilePath })],
      extensions: ["", ".js", ".json", ".ts", ".tsx"],
    },
  },
  scriptsConfig,
  stylesConfig,
  imagesConfig
);
