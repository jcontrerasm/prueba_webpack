

// npm install --save-dev webpack
// npm install webpack webpack-dev-server -D
// para ejecutar el servidor --> node node_modules/.bin/webpack-dev-server

// npm install --save-dev babel-loader babel-core babel-preset-env webpack

// Require webpack para incluir plugins
const webpack = require('webpack');
const path = require('path');

const config = {
  // Entrada
  entry: "./src/js/app.js",
  // Salido
  output: {
    path: path.resolve(__dirname, "dist/js/"),
    filename: "bundle.js"
  },
  // Limpia el codigo de webpack
  //devtool: "eval-source-map",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" }
        ]
      }
    ]
  },
  plugins: [
    // Añadiendo plugin Uglify
    new webpack.optimize.UglifyJsPlugin()
  ]
};

module.exports = config;