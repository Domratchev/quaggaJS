const config = require('./webpack.config.js');

config.devtool = false;
config.mode = 'production';

config.optimization = config.optimization || {};
config.optimization.minimize = true;

config.output = config.output || {};
config.output.filename = 'quagga.min.js';
config.output.sourceMapFilename = '';

module.exports = config;
