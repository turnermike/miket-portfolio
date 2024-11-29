const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  
  // entry: '../src/index.js',
  entry: path.join(__dirname, '../src/index.js'),
  
  output: {
    filename: 'js/bundle.js',
    path: path.join(__dirname, '../public')
  },
  
  module: {
    
    rules: [
      {
        // scripts
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
        //styles
        test: /\.(scss|css)$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
        // use: [
        //   MiniCssExtractPlugin.loader, // Extract CSS into separate files
        //   'style-loader',
        //   'css-loader',
        //   'sass-loader',
        // ],
      },
      
      {
        // fonts
        test: /\.(woff|woff2|eot|ttf|otf|)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[ext]',
        },
      },     
         
      {
        // images
        test: /\.(png|jpe?g|gif|svg|pdf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[ext]',
        },
      },      
      
      {
        // documents
        test: /\.(pdf|doc|docx)$/,
        type: 'asset/resource',
        generator: {
          filename: 'documents/[name].[ext]',
        },
      },      
      
    ]
    
  },
  
  resolve: {
    extensions: ['.js', '.jsx', '.json', '.ts', '.tsx'],
    alias: {
      '@components': path.resolve(__dirname, '../src/components'),
    },    
  },
  
  // plugins: [
  //   new MiniCssExtractPlugin({
  //     filename: 'css/[name].css', // Save CSS files in a "css" directory
  //   }),
  // ],
  
  
};
