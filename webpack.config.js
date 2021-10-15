const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    filename: '[name].[contenthash].js', // динамичное и уникальное имя файла
    path: path.resolve(__dirname, 'dist'),
    clean: true, // для очистки папки dist при новом билде
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Document Webpack 5',
  }),
    ],
  module: {
    rules: [
      /** Babel **/
      {
        test: /\.m?js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env']
            }
        }
        // npm install babel-loader @babel/core @babel/preset-env -D
      },
      /** CSS */
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
        // npm i style-loader css-loader -D
      },
      /** SCSS/SAAS */
      {
        test: /\.s[ac]ss$/i,
        use: [
            // Creates `style` nodes from JS strings
            "style-loader",
            // Translates CSS into CommonJS
            "css-loader",
            // Compiles Sass to CSS
            "sass-loader",
        ],
        // npm i style-loader css-loader sass sass-loader -D
      },
      /** Картинки */
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      /** Шрифты */
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
      /** Файлы CSV */
      {
        test: /\.(csv|tsv)$/i,
        use: ['csv-loader'],
        // npm i csv-loader -D
      },
      /** Файлы XML */
      {
        test: /\.xml$/i,
        use: ['xml-loader'],
        // npm i xml-loader -D 
      },
      // ** style loader */
      {
        test: /\.css$/i,
        use: [
          // The `injectType`  option can be avoided because it is default behaviour
          { loader: "style-loader", options: { injectType: "styleTag" } },
          "css-loader",
        ],
      },
      // ** HTML loader */
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },

  devServer: {
    port: 8368,
    open: true,
   },
};