const path = require('path');
const webpack = require('webpack');
const UmdPlugin = require('./plugins/umd');

module.exports = {
    entry: path.resolve(__dirname, 'src/quagga.js'),
    devtool: 'inline-source-map',
    mode: 'development',
    module: {
        rules: [{
            test: /\.tsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    },
    resolve: {
        alias: {
            Common: path.resolve(__dirname, 'src/common/'),
            Input: path.resolve(__dirname, 'src/input/')
        },
        extensions: ['.js', '.ts']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/',
        filename: 'quagga.js',
        library: 'Quagga',
        libraryTarget: 'var',
        umdNamedDefine: true
        // optionalAmdExternalAsGlobal: { 'fff'}
    },
    devServer: {
        contentBase: './',
        hot: true
    },
    plugins: [
        new UmdPlugin(),
        new webpack.DefinePlugin({
            ENV: require(path.resolve(__dirname, 'env', process.env.BUILD_ENV))
        })
    ]
};
