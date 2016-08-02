import path from 'path'

const RAILS_ASSETS_PATH = '../app/assets'

export default {
  debug: true,
  devtool: 'cheap-module-eval-source-map',
  noInfo: true,
  context: __dirname + '/src',
  entry: {
    app: './app'
  },
  output: {
    filename: '[name].bundle.js',
    path: RAILS_ASSETS_PATH + '/javascripts/built',
    pathinfo: true
  },
  module: {
    loaders: [
      {test: /\.js$/, include: path.join(__dirname, 'src'), loaders: ['babel']}
    ]
  }
}
