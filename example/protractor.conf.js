'use strict';
// An example configuration file.
exports.config = {
  // The address of a running selenium server.
  //seleniumAddress: 'http://localhost:4444/wd/hub',
  //seleniumServerJar: deprecated, this should be set on node_modules/protractor/config.json

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome',
    'chromeOptions': {
      'args': ["--headless", "--disable-gpu"]
    }
  },
  directConnect: true,
  beforeLaunch: () => {
    require('ts-node').register();
  },

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['e2e/**/*.e2e.ts'],

  // Options to be passed to Jasmine-node.
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 10000
  }
};
