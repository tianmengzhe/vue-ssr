// 客户端渲染配置

const webpack = require('webpack')
const utils = require('./utils')
const path = require('path')
function resolve(dir){
    return path.join(__dirname, '..', dir)
}

module.exports = {
    entry: './src/entry-client.js',
    output:{
        path: path.resolve(__dirname, '../dist'),
        publicPath: '/dist/',
        filename:'build.client.js',
    },
    // plugin:[

    // ],
    resolve:{
        extensions: ['.js', '.vue', '.json'],
        alias:{
            'vue$':'vue/dist/vue.esm.js',
            '@': resolve('src')
        }
    },
    module:{
        rules:[
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    compilerOptions:{
                        preserveWhitespace: false
                    }
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test'), resolve('node_modules/webpack-dev-server/client')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                  limit: 10000,
                  name: utils.assetsPath('img/[name].[hash:7].[ext]')
                }
            },
        ]
    }
}