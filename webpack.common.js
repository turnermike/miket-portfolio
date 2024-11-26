const path = require('path');
module.exports = {
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  module: {
    rules: [
      // {
      //   loader: 'babel-loader',
      //   test: /\.js$/,
      //   exclude: /node_modules/
      // },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          'babel-loader',                       // babel options are set in babel.config.js
        ]
      },      
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
};
