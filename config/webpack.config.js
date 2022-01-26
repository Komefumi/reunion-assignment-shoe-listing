const HtmlWebpackPlguin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin");
const { merge: webpackMerge } = require("webpack-merge");
const {
  scriptsConfig,
  stylesConfig,
  imagesConfig,
} = require("./webpack.utils");
const { entryFilePath, tsconfigFilePath, distPath } = require("./paths");

module.exports = webpackMerge(
  {
    entry: entryFilePath,
    output: {
      filename: "[name]-[fullhash:15].js",
      path: distPath,
    },
    plugins: [new HtmlWebpackPlguin(), new CleanWebpackPlugin()],
    resolve: {
      plugins: [new TsconfigPathsPlugin({ configFile: tsconfigFilePath })],
    },
  },
  scriptsConfig,
  stylesConfig,
  imagesConfig
);
