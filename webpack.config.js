var path = require("path")
var webpack = require('webpack')
var BundleTracker = require('webpack-bundle-tracker')
var autoprefixer = require('autoprefixer');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './js/index.jsx', // entry point of our app. assets/js/index.js should require other js modules and dependencies it needs
  output: {
      path: path.resolve('./public'),
      filename: "bundle.js",
  },

  module: {
    loaders: [
      { test: /\.js|\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query:
          {
            presets:[ 'es2015', 'react', 'stage-3',  {"plugins": ["./babelRelayPlugin"], } ]
          }
      }, // to transform JSX into JS
      {
         test: /\.css$/,
         loader: "style-loader!css-loader"
       },
       {
         test: /\.scss$/,
         loader: "style-loader!css-loader!sass-loader"
        },
        {
         test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
         loader: "file-loader"
       },
       { test: /\.styl$/,
         loader: 'style-loader!css-loader!stylus-loader'
       },

    ],
  },
  devtool: "inline-source-map",
  postcss: [autoprefixer],
  sassLoader: {
       data: '@import "theme/_config.scss";',
       includePaths: [path.resolve(__dirname, './js')]
 },
 resolve: {
    modulesDirectories: ['node_modules', 'bower_components'],
    extensions:['', '.scss', '.css', '.js', '.json', '.jsx'],
  },
  plugins: [

    //new ExtractTextPlugin('bundle.css', { allChunks: true }),
    //new webpack.HotModuleReplacementPlugin(),
    new BundleTracker({filename: './webpack-stats.json'}),

   ]
}
