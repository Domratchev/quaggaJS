const webpackConfig = {
    mode: 'production',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }]
    }
};

module.exports = function (config) {
    config.set({
        basePath: '',
        frameworks: ['mocha', 'chai', 'sinon'],
        files: [
            'test/test-main-integration.js',
            { pattern: 'test/integration/**/*.js', included: false },
            { pattern: 'test/fixtures/**/*.*', included: false }
        ],
        preprocessors: {
            'test/test-main-integration.js': ['webpack']
        },
        webpack: webpackConfig,
        plugins: [
            'karma-chrome-launcher',
            'karma-mocha',
            'karma-chai',
            'karma-sinon',
            'karma-webpack'
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
