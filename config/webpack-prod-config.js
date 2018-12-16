const path = require("path");

const webpack = require("webpack");
const merge = require("webpack-merge");
const UglifyJSPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const paths = require("./paths");
const common = require("./webpack-common-config.js");

module.exports = merge(common, {
  entry: {
    vendor: ["react"],
    app: paths.appIndexJs
  },
  mode: "production",
  output: {
    filename: "[chunkhash]_[name].js",
    path: paths.appBuild,
    publicPath: "/"
  },
  plugins: [
    new UglifyJSPlugin(),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("production")
      }
    }),
    new MiniCssExtractPlugin("styles.css")
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        include: path.resolve(paths.appSrc),
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/react"]
          }
        }
      },
      {
        test: /\.(css|scss)$/,
        exclude: [
          path.resolve(
            "node_modules/primereact/resources/themes/nova-light/theme.css"
          ),
          path.resolve("node_modules/primereact/resources/primereact.min.css"),
          path.resolve("node_modules/primeicons/primeicons.css")
        ],
        use: [
          {
            loader: MiniCssExtractPlugin.loader
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: false,
              modules: true, // Locally scoped
              localIdentName: "[name]__[local]___[hash:base64:5]"
            }
          },
          {
            loader: "sass-loader",
            options: {
              outputStyle: "compressed"
            }
          }
        ]
      },
      {
        test: /\.(css|scss)$/,
        include: [
          path.resolve(
            "node_modules/primereact/resources/themes/nova-light/theme.css"
          ),
          path.resolve("node_modules/primereact/resources/primereact.min.css"),
          path.resolve("node_modules/primeicons/primeicons.css")
        ],
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              importLoaders: 1
            }
          },
          "sass-loader"
        ]
      }
    ]
  }
});
