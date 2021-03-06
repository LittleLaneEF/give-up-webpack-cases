const path = require('path');
const Webpack = require('webpack');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const { NODE_ENV } = process.env;

module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, './dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        
        // 注意这里 loader 配置的顺序，样式文件依次从右到左经过 use 配置 loader 的处理
        // css-loader 是解析样式文件
        // style-loader 是将解析后的样式渲染在页面上
        use: NODE_ENV === 'development' ? ['style-loader', 'css-loader'] : ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        }),
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(['dist']),
    new ExtractTextWebpackPlugin('index.css'),
    new HtmlWebpackPlugin({
      // 要进行打包的 html 模板文件
      template: 'index.html',
    }),
    new Webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
  },
  mode: NODE_ENV,
}