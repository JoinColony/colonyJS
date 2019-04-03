// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    basePath: './app',
    customLaunchers: {
      ChromeHeadless:  {
        base:   'Chrome',
        flags:  [
          '--headless',
          '--disable-gpu',
          '--remote-debugging-port=9222',
        ],
      }
    },
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage-istanbul-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    autoWatch: false,
    browsers: ['ChromeHeadless'],
    singleRun: true
  });
};
