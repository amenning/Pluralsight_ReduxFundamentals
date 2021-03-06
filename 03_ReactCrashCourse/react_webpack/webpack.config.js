const path = require("path");
const webpack = require("webpack");

module.exports = {
  entry: './public/js/index.js',
  mode: "development",
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        loader: "babel-loader",
        options: {
            presets: ['@babel/react', '@babel/env']
        }
      }
    ]
  },
  resolve: { extensions: ["*", ".js", ".jsx"] },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public/js/build')
  },
  devServer: {
    contentBase: path.join(__dirname, "."),
    port: 3000,
    hotOnly: true
  },
  plugins: [new webpack.HotModuleReplacementPlugin()]
};