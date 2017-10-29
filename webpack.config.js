var webpack = require('webpack');
//var path = require('path');

module.exports = {
    //页面入口文件配置
    entry: {
        "fe":'./client/static/fe/views/index.js',
        "be":'./client/static/be/views/index.js'
    },
    //入口文件输出配置
    output: {
        path:__dirname+'/client/static/build' ,
        filename: '[name].bundle.js'
    },
    module: {
        //加载器配置
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','react']
                }
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader?limit=8192&name=../images/[hash:8].[name].[ext]' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            { 
                test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
                loader: "file-loader" 
            },  //添加
            { 
                test: /\.(woff|woff2)$/, 
                loader:"url-loader?prefix=font/&limit=5000" 
            }, //添加
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "url-loader?limit=10000&mimetype=application/octet-stream" }, //添加
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "url-loader?limit=10000&mimetype=image/svg+xml" 
            } //添加
        ]
    }
}