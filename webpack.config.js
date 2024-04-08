const path = require("path"); // CommnonJs
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "public", "assets", "js"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/env"],
          },
        },
      },
    ],
  },
  devtool: "source-map",
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          sourceMap: true,
          output: {
            comments: false,
          },
          keep_classnames: /addSeoAttributesFromApiHtmlElements/g,
          keep_fnames: /addSeoAttributesFromApiHtmlElements/g,
        },
      }),
    ],
  },
};
