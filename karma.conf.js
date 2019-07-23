const webpackConfig = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    envName: 'test'
                }
            }
        }]
    }
};

module.exports = config => {
    config.set({
        basePath: '',
        frameworks: ['source-map-support', 'mocha', 'chai', 'sinon'],
        files: [
            'test/test-main.js',
            { pattern: 'test/spec/**/*.js', included: false }
        ],
        preprocessors: {
            'test/test-main.js': ['webpack']
        },
        webpack: webpackConfig,
        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-coverage',
            'karma-mocha',
            'karma-chai',
            'karma-sinon',
            'karma-source-map-support',
            'karma-webpack'
        ],
        reporters: ['progress', 'coverage'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        autoWatch: true,
        browsers: ['Chrome'],
        singleRun: false,
        coverageReporter: {
            type: 'html',
            dir: './coverage'
        }
    });
};
