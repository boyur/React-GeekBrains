let path = require('path');
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');
let BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = {
    entry: path.join(__dirname, 'src', 'main'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    },
    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: [
                    'react',
                    'es2015',
                    'stage-0'
                ]
            }
        }, {
            test: /\.css$/,
            loader: 'style!css'
        }]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css']
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html'),
            filename: path.join(__dirname, 'dist', 'index.html')
        }),
        new BrowserSyncPlugin({
            host: 'localhost',
            port: 4000,
            server: {
                baseDir: ['dist']
            }
        })
    ]
};