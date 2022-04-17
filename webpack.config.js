const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    home: './src/pages/home.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "The Original Mama's Pizza",
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
};