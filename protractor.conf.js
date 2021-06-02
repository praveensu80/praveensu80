var reportsDirectory = './Reports/';
var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const SpecReporter = require('jasmine-spec-reporter').SpecReporter
var HtmlReporter = require('protractor-beautiful-reporter');
var jetpack = require('fs-jetpack');

exports.config = {
  framework: 'jasmine2',
  jasmineNodeOpts: {
    showColors: true,
    silent: true,
    defaultTimeoutInterval: 360000,
    print () {},
  },
  directConnect: true,
  suites: {
    // homepage: 'tests/e2e/homepage/**/*Spec.js',
    search: [
            './specs/browser/Automate guru test.js',
            './specs/browser/Automate Browser Version.js',
            '/specs/browser/Automate Global.js'
            ],
    single: [
            './specs/browser/Automate Browser Version.js',
            ],
    specs: ['./specs/browser/Automate Browser Version.js'],
  },
  params:  { 
  //weburl: 'https://angularjs.org',
  Globalurl: "https://www.globalsqa.com/angularJs-protractor/Multiform/#/form/profile",
  yourname: 'GURU99',
  },
 
    multiCapabilities: [
        {
            'browserName': 'chrome',
            'maxInstances': 1,
            'shardTestFiles': true,
            'chromeOptions': {
                'args': ['no-sandbox', '--disable-web-security'],
                //'args': ['no-sandbox', 'headless'],
                // 'prefs': {                 
                // }
            }
        },
       
        // {
        //    'browserName': 'firefox',
        //     'maxInstances': 1,
        //     'shardTestFiles': false
        // },
    ],

  beforeLaunch: function () {
        jetpack.remove(reportsDirectory);
      },
  onPrepare: function(){jasmine.getEnv().addReporter(
        new SpecReporter({
        spec: {
        displayStacktrace: true,
        },
        summary: {
        displayDuration: false,
        },
      })),
  jasmine.getEnv().addReporter(new HtmlReporter({
         baseDirectory: 'Reports'
      }).getJasmine2Reporter());
}
}