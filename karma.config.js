process.env.CHROME_BIN = require('puppeteer').executablePath();

module.exports = function (config) {
    config.set({
        frameworks: ['mocha', 'chai', 'karma-typescript'],
        files: [
            'spec/**/*.ts'
        ],
        preprocessors: {
            '**/*.ts': ['karma-typescript']
        },
        reporters: ['dots', 'karma-typescript'],
        port: 9876,
        colors: true,
        logLevel: config.LOG_INFO,
        browsers: ['ChromeHeadless'],
        singleRun: true,
        autoWatch: false,
        concurrency: Infinity
    });
};
