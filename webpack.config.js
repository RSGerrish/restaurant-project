const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index: './src/index.js',
    header: './src/pages/header.js',
    footer: './src/pages/footer.js',
    sinkingspring: './src/pages/sinkingspring.js',
    menu: './src/pages/menu.js',
    specials: './src/pages/specials.js',
    giftcards: './src/pages/giftcards.js',
    locations: './src/pages/locations.js',
    application: './src/pages/application.js',
    clear: './src/functions/clear.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "The Original Mama's Pizza",
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
    assetModuleFilename: (pathData) => {
      const filepath = path.dirname(pathData.filename).split("/").slice(1).join("/");
      return `${filepath}/[name].[hash][ext][query]`;
    },
  },
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
    ],
  },
  devtool: 'inline-source-map',
};