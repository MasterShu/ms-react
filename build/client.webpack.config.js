const path = require('path')
const webpack = require('webpack')
const HTMLPlugin = require('html-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

config = {
    entry: {
        app: path.join(__dirname, "../client/index.js")
    },
    output: {
        filename: "[name].[hash].js",
        path: path.join(__dirname, '../dist'),
        publicPath: '/public/'
    },
    module: {
        rules: [
            {
                test: /.js$/,
                loader: 'babel-loader',
                exclude: [
                    path.join(__dirname, "../node_modules")
                ]
            }
        ]
    },
    plugins: [
        new HTMLPlugin({
            template: path.join(__dirname, "../client/index.html")
        }),
        new webpack.HotModuleReplacementPlugin
    ]
}

if (isDev) {
    config.entry = {
        app: [
            'react-hot-loader/patch',
            path.join(__dirname, "../client/index.js")
        ]
    }
    config.devServer = {
        host: "0.0.0.0",
        port: "8089",
        contentBase: path.join(__dirname, "../dist"),
        hot: true,
        overlay: {
            errors: true
        },
        publicPath: "/public/",
        historyApiFallback: {
            index: '/public/index.html'
        }
    }
}

module.exports = config