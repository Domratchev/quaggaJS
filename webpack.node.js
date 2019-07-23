const config = require('./webpack.config.js');

config.externals = [
    'get-pixels',
    'ndarray',
    'ndarray-linear-interpolate'
];

config.mode = 'production';

config.module = config.module || {};
config.module.rules = [{
    test: /\.ts$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            envName: 'node'
        }
    }
}, {
    test: /\.js$/,
    exclude: /node_modules/,
    use: {
        loader: 'babel-loader',
        options: {
            envName: 'node'
        }
    }
}];

config.output = config.output || {};
config.output.libraryTarget = 'umd';
config.output.path = __dirname + '/lib';

delete config.plugins;

config.resolve = config.resolve || {};
config.resolve.alias = {
    './config/config': './config/config.node',
    './input/frame_grabber': __dirname + '/lib/frame_grabber',
    './input/input_stream': __dirname + '/lib/input_stream'
};

config.target = 'node';

module.exports = config;
