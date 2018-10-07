const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './src',
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: "/dist/",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        
        // 注意这里 loader 配置的顺序，样式文件依次从右到左经过 use 配置 loader 的处理
        // css-loader 是解析样式文件
        // style-loader 是将解析后的样式渲染在页面上
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader']
        }),
      }
    ]
  },
  plugins: [
    new ExtractTextWebpackPlugin('index.css'),
  ],
  devServer: {},
  mode: process.env.NODE_ENV,
}