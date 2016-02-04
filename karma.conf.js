var webpackConfig = require('./webpack.config');

module.exports = function (config) {
  config.set({
    browsers: [ 'Chrome' ], //run in Chrome
    singleRun: true, //just run once by default
    frameworks: [ 'mocha' ], //use the mocha test framework
    files: [
      'tests.webpack.js' //just load this file
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ] //preprocess with webpack and our sourcemap loader
    },
    reporters: [ 'mocha' ],
    mochaReporter: {
      output: 'minimal'
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true //please don't spam the console when running in karma!
    },
    plugins: [
      'karma-mocha',
      'karma-chrome-launcher',
      'karma-webpack',
      'karma-sourcemap-loader',
      'karma-mocha-reporter'
    ]
  });
};
