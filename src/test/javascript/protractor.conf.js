const HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
const JasmineReporters = require('jasmine-reporters');
var scenarioo = require('scenarioo-js');

exports.config = {
    allScriptsTimeout: 20000,

    specs: [
        './e2e/account/*.spec.ts',
        './e2e/admin/*.spec.ts',
        './e2e/entities/*.spec.ts',
        /* jhipster-needle-add-protractor-tests - JHipster will add protractors tests here */
    ],

    capabilities: {
        'browserName': 'chrome',
        'phantomjs.binary.path': require('phantomjs-prebuilt').path,
        'phantomjs.ghostdriver.cli.args': ['--loglevel=DEBUG']
    },

    directConnect: true,

    baseUrl: 'http://localhost:8080/',

    framework: 'jasmine2',

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 720000
    },

    beforeLaunch: function () {
        require('ts-node').register({
            project: ''
        });
    },

    onPrepare: function () {
        browser.driver.manage().window().setSize(1280, 1024);
        jasmine.getEnv().addReporter(new JasmineReporters.JUnitXmlReporter({
            savePath: 'build/reports/e2e',
            consolidateAll: false
        }));
        jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
            dest: "build/reports/e2e/screenshots"
        }));
        scenarioo.setupJasmineReporter(jasmine, {

            // Directory inside which to store the report files
            targetDirectory: './scenarioReports',

            // Identification of the current branch or software version being tested and the id of the run of the build jub,
            // usually fetched from your environment (e.g. passed via `process.env` or asking git tooling)
            // using this identifiers you can later link to reports of that same build in the Viewer Web App.
            branchName: 'master',  // use your real branch (or product version) that you are documenting here
            buildName: 'build_' + new Date(), // better use unique build identifier, if available

            // Optional: additional documentation information about tested product version and branch:
            revision: '1.0.0', // use e.g. git version here (e.g. `git describe --always`)
            branchDescription: 'optional description text for the branch, that you will see in reports',

            // Define a unique human readable identifier of the page the test is currently on (usually a part of the URL)
            pageNameExtractor: function (url) {
                return url.pathname;
            },

            // Enable automatic screenshot step generated on each expectation failed
            reportStepOnExpectationFailed: true,

            // Enable to write last step of a scenario automatically for both failed and passed (=successful) test scenarios
            recordLastStepForStatus: {
                failed: true,
                success: true
            }

        });
    },

    useAllAngular2AppRoots: true
};
