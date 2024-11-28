const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  
  entry: './src/index.js',
  
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'public')
  },
  
  module: {
    
    rules: [
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: [
      //     'thread-loader',
      //     'babel-loader',                       // babel options are set in babel.config.js
      //   ]
      // },

      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'thread-loader',
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env', '@babel/preset-react'], // Add React preset
            },
          },
        ],
      },      
      
      {
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      
      {
        test: /\.(pdf|png|jpe?g|gif|woff|woff2|eot|ttf|otf|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
            },
          },
        ],
      },
      
    ]
    
  },
  
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
    },    
  },  
  
};
