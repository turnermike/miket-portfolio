const path = require('path');
const { merge } = require('webpack-merge');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const common = require('./webpack.common.js');


module.exports = merge(common, {
  
  mode: 'development',
  
  devServer: {
    static: {
      directory: path.join(__dirname, 'public'),
    },
    compress: true,
    port: 3000,
  },
  
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '.webpack_cache'),
    name: 'miket-portfolio-webpack-cache',
    buildDependencies: {
      config: [path.resolve(__dirname, 'webpack.common.js'), path.resolve(__dirname, 'webpack.dev.js')]
    }
  },
  
  plugins: [
    new WebpackBuildNotifierPlugin({
      title: "MikeT Portfolio Custom Build",
      suppressSuccess: false,
      sound: 'Submarine',
      successSound: true,
      suppressCompileStart: true,
      activateTerminalOnError: true,
    }),
  ],
  
  devtool: 'eval-source-map',   
  
});
