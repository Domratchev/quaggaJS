const path = require('path');
const webpack = require('webpack');

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon', 'sinon-chai'],
        files: [
            'test/test-main-integration.js',
            { pattern: 'test/integration/**/*.js', included: false },
            { pattern: 'test/fixtures/**/*.*', included: false }
        ],
        preprocessors: {
            'test/test-main-integration.js': ['webpack']
        },
        webpack: {
            entry: './src/quagga.js',
            mode: 'development',
            module: {
                rules: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }]
            },
            resolve: {
                alias: {
                    Common: path.resolve(__dirname, 'src/common/'),
                    Input: path.resolve(__dirname, 'src/input/')
                }
            },
            plugins: [
                new webpack.DefinePlugin({
                    ENV: require(path.resolve(__dirname, 'env', 'production'))
                })
            ]
        },
        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-sinon',
            'karma-sinon-chai',
            require('karma-webpack')
        ],
        reporters: ['progress'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO, // LOG_DEBUG
        autoWatch: true,
        customLaunchers: {
            ChromeDebugging: {
                base: 'Chrome',
                flags: ['--remote-debugging-port=9333'],
                debug: true
            }
        },
        browsers: ['ChromeDebugging'],
        singleRun: false
    });
};
