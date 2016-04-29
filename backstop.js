var environmentUrl = 'http://127.0.0.1:4000/';

var backstopConf = {
    "viewports": [
        {
            "name": "s",
            "width": 320,
            "height": 2000
        },
        {
            "name": "m",
            "width": 640,
            "height": 2000
        },
        {
            "name": "l",
            "width": 960,
            "height": 2000
        }
    ],
    "scenarios": [],
    "paths": {
        "bitmaps_reference": "../../backstop_data/bitmaps_reference",
        "bitmaps_test": "../../backstop_data/bitmaps_test",
        "compare_data": "../../backstop_data/bitmaps_test/compare.json",
        "casper_scripts": "../../backstop_data/casper_scripts"
    },
    "engine": "phantomjs",
    "report": ["CLI", "browser"],
    "cliExitOnFail": false,
    "casperFlags": [],
    "debug": false,
    "port": 3001
};

var introScenarioUrls = [
    environmentUrl + 'jekyll/update/2016/04/29/welcome-to-jekyll.html'
];

var introScenarios = introScenarioUrls.map(function(scenarioUrl) {
    return {
        "label": scenarioUrl,
        "url": scenarioUrl,
        "hideSelectors": [],
        "removeSelectors": [],
        "selectors": [
            "body"
        ],
        "readyEvent": null,
        "delay": 50,
        "misMatchThreshold" : 0.1,
        "onBeforeScript": null,
        "onReadyScript": null
    };
});

backstopConf.scenarios = introScenarios;

module.exports = backstopConf;
