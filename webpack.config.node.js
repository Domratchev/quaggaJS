const path = require('path');
const config = require('./webpack.config.js');

config.externals = [
    'get-pixels',
    'ndarray',
    'ndarray-linear-interpolate'
];

config.mode = 'production';

config.output = config.output || {};
config.output.libraryTarget = 'umd';
config.output.path = path.resolve(__dirname, 'lib');

config.resolve = config.resolve || {};
config.resolve.alias = {
    Common: path.resolve(__dirname, 'src/common/'),
    Input: path.resolve(__dirname, 'lib/')
};

module.exports = config;
