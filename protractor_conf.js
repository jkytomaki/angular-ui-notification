// An example configuration file.
exports.config = {
    allScriptsTimeout: 99999,
    // Do not start a Selenium Standalone sever - only run this using chrome.
    directConnect: true,
    chromeDriver: '/usr/lib/node_modules/webdriver-manager/selenium/chromedriver',

    seleniumArgs: ['-browserTimeout=60'],

    // Capabilities to be passed to the webdriver instance.
    capabilities: {
        'browserName': 'chrome',
        firefox_binary: '/usr/bin/firefox',
        'firefoxOptions': {
            firefox_binary: '/usr/bin/firefox',
            args: [],
            extensions: []
        }
    },

    // Spec patterns are relative to the current working directly when
    // protractor is called.
    specs: ['test/e2e/**/*.spec.js'],

    // Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000,
    }
};
