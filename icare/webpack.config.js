// nodejs 中的path模块

var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    
    entry: path.resolve(__dirname, './src/index.js'),
    // 输出配置
    output: {
        path: path.resolve(__dirname, './css'),
        publicPath: 'css/',
        filename: 'icare.js'
    },
    devtool: "source-map", 
    module: {
        loaders: [
            
            {
                test: /\.css$/,   
                loader:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader' })
            },
            {
                test: /\.html$/, 
                loader: 'html-loader'   
            },
            { 
              test: /\.scss$/,
              loader:  ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap!sass-loader?sourceMap' })
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: '../index-webpack.html',
            template: path.resolve(__dirname, 'src/index.html'),
            inject: true
        }),
        new ExtractTextPlugin("icare.css")
    ]
}