const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

const paths = require("./paths");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: paths.appHtml
    })
  ],
  resolve: {
    extensions: [".js", ".jsx", ".scss"],
    modules: ["node_modules"],
    alias: {
      Assets: path.resolve(paths.appSrc, "assets"),
      Components: path.resolve(paths.appSrc, "components")
    }
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      }
    ]
  }
};