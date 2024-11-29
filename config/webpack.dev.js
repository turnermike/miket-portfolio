const path = require('path');
const { merge } = require('webpack-merge');
const WebpackBuildNotifierPlugin = require('webpack-build-notifier');
const common = require('./webpack.common.js');

const port = process.env.PORT || 3000;

module.exports = merge(common, {
  
  mode: 'development',
  
  // devServer: {
  //   static: {
  //     directory: path.join(__dirname, '../public'),
  //   },
  //   open: true,
  //   compress: true,
  //   port: port,
  // },
  
  devServer: {
    static: {
      // Ensure the path is correctly pointing to the 'public' folder one level up
      directory: path.join(__dirname, '../public'), 
    },
    open: true, // Automatically opens the browser
    compress: true, // Enables gzip compression
    port: port, // Ensure the correct port is being used (you can define it above)
    historyApiFallback: true, // Ensures React Router or similar SPA libraries work
    hot: true, // Enables hot module replacement (HMR) if needed
    liveReload: true, // Automatically reloads the page on file changes
  },  
  
  cache: {
    type: 'filesystem',
    cacheDirectory: path.resolve(__dirname, '../.webpack_cache'),
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
