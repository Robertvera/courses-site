const HtmlWebPackPlugin = require("html-webpack-plugin");
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {  
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.css$/,
        use: [
          {
            loader: "css-loader" 
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          "style-loader",
          { loader: 'css-loader', options: { minimize: true } },
          { loader: 'sass-loader', options: { minimize: true } }
        ]
      },
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg|jpg)$/, 
        use: {
          loader: 'url-loader?limit=100000'
        } 
      }
    ]
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    })
  ],
  devtool: 'inline-source-map',
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    namedModules: false,
    namedChunks: false,
    nodeEnv: 'production',
    flagIncludedChunks: true,
    occurrenceOrder: true,
    sideEffects: true,
    usedExports: true,
    concatenateModules: true,
    noEmitOnErrors: true,
    checkWasmTypes: true,
    minimize: true,
},
};