var path = require('path');

module.exports = {
  entry: './router.jsx',
  output: {
    filename: './site/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: 'babel',
        exclude: /node_modules/,
      },
      {
        test: /\.json$/,
        loaders: [ 'json' ],
        exclude: /node_modules/,
        include: __dirname
      }
    ]
  },
  devtool: 'source-map',
  resolve: {
    alias: {
      config: path.join(__dirname, 'config', process.env.NODE_ENV || "development")
    }
  }
}
