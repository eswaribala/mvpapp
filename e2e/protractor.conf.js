// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts


const { SpecReporter } = require('jasmine-spec-reporter');

const jasmineReporters = require('jasmine-reporters');
const HTMLReport = require('protractor-html-reporter-2');
const fs = require('fs-extra');
/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome',
    'shardTestFiles': true,
      'maxInstances': 2
  },
  
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function() {}
  },
 

 
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({ spec: { displayStacktrace: true } }));
    fs.emptyDir('e2e/_report', (err) => { err && console.log(err); });
    const jasmineEnv = jasmine.getEnv();
    const specReporter = new SpecReporter({ spec: { displayStacktrace: true } });
    const xmlReporter = new jasmineReporters.JUnitXmlReporter({
      consolidateAll: true,
      savePath: './e2e/_report',
      filePrefix: 'e2exmlresults'
    });
    const screenshotReporter = {
      specDone: function (result) {
        if (result.status === 'failed') {
          // @ts-ignore
          browser.getCapabilities().then(function (caps) {
            const browserName = caps.get('browserName');
            // @ts-ignore
            browser.takeScreenshot().then(function (png) {
              const stream = fs.createWriteStream('e2e/_report/' + browserName + '-' + result.fullName + '.png');
              stream.write(new Buffer(png, 'base64'));
              stream.end();
            });
          });
        }
      }
    };
    jasmineEnv.addReporter(specReporter);
    jasmineEnv.addReporter(xmlReporter);
    jasmineEnv.addReporter(screenshotReporter);
  },
  //HTMLReport called once tests are finished
  onComplete: function() {
    let browserName, browserVersion, platform;
    // @ts-ignore
    const capsPromise = browser.getCapabilities();
    capsPromise.then(function (caps) {
      browserName = caps.get('browserName');
      browserVersion = caps.get('version');
      platform = caps.get('platform');
     let fileName="MVPTestReport"+"_"+new Date().getMilliseconds().toString();
      const testConfig = {
        reportTitle: 'MVP App Test Report',
        outputPath: './e2e/_report',
        outputFilename: fileName,
        screenshotPath: '.',
        testBrowser: browserName,
        browserVersion: browserVersion,
        modifiedSuiteName: false,
        screenshotsOnlyOnFailure: false,
        testPlatform: platform
      };
      new HTMLReport().from('e2e/_report/e2exmlresults.xml', testConfig);
    });
  }

  


};