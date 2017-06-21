var path = require('path')
var projectRoot = path.resolve(__dirname, './app/src')

module.exports = {
  entry: __dirname + '/app/src/main.js',
  output: {
    path: __dirname + '/app/scripts',
    filename: 'home.js',
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: projectRoot,
        options: {
          formatter: require('eslint-friendly-formatter'),
        },
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loader: {
            scss: 'style!css!sass',
            options: {
              minimize: true,
            },
          },
        },
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: projectRoot,
      },
      {
        test: /\.css$/,
        loaders: ['style-loader', 'css-loader'],
      },
      {
        test: /\.s[a|c]ss$/,
        loaders: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
};