var path = require('path');

var pkg = require('./package.json');
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var util = require('./config/util/');
var loadersByExtension = util.loadersByExtension;

var libPath = path.join(__dirname, 'lib');
var wwwPath = path.join(__dirname, 'www');
var deepExtend = require('deep-extend');

var env = JSON.stringify(require('./env/default.env.json'))

module.exports = function (options) {
  'use strict';

  var isDev = options.isDev || true;

  var entry = path.join(libPath, 'index.js')
  var root = [libPath,];


  // Plug-ins
  var plugins = [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      pkg: pkg,
      template: path.join(libPath, 'index.html')
    }),
    new webpack.ProvidePlugin({
      register: 'registerjs',
      _: 'lodash',
    }),

  ];

  // Environment
  deepExtend(env, JSON.stringify(require('./env/' + options.env + '.env.json')))

  plugins.push(
    new webpack.DefinePlugin({
      ENV: env
    })
  );

  // Loaders
  var scriptLoaders = {
    'js': {
      loader: 'ng-annotate?add=true!babel',
      exclude: /(node_modules)/,
    },
    'html': {
      loader: 'html'
    },
    'json': {
      loader: "json"
    },
    'png|jpg|svg': {
      loader: 'file?name=images/[path][name].[ext]'
    },
    'eot|ttf|woff|svg': {
      loader: 'file?name=fonts/[name].[ext]'
    }
  };

  var browsers = {browsers: ['last 2 version', 'ie >= 10']};
  var stylesheetLoaders = {
    'scss|css': 'style!css-loader!autoprefixer-loader?' + JSON.stringify(browsers) + '!sass'
  };

  Object.keys(stylesheetLoaders).forEach(function (ext) {
    var loaders = stylesheetLoaders[ext];

    if (Array.isArray(loaders)) loaders = loaders.join('!');
    stylesheetLoaders[ext] = 'style-loader!' + loaders;
  });

  var loaders = loadersByExtension(scriptLoaders).concat(loadersByExtension(stylesheetLoaders));


  if (options.optimized) {
    plugins.push(
      new HtmlWebpackPlugin({
        filename: 'index.html',
        pkg: pkg,
        template: path.join(libPath, 'index.html')
      }),
      new webpack.ProvidePlugin({
        register: 'registerjs'
      }),
      new webpack.optimize.OccurenceOrderPlugin(),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin()
    )
  }

  var output = {
    path: wwwPath,
    filename: 'app-[hash:6].js',
    pathinfo: options.debug,
    sourceMapFilename: 'debugging/[file].map',
  };

  // Export
  return {
    entry: entry,
    output: output,
    module: {
      loaders: loaders,
    },
    devtool: options.devtool,
    resolve: {
      extensions: ['', '.js', '.json', '.scss', '.html'],
      root: root,
      moduleDirectories: [
        'node_modules'
      ],
      alias: {
        'registerjs': path.resolve(__dirname, './lib/util/register.js'),
      }
    },
    plugins: plugins
  }
}
