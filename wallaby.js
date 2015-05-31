var wallabify = require('wallabify');

module.exports = function (wallaby) {
    var wallabyPostprocessor = wallabify({
            // browserify options, such as
            // insertGlobals: false
            extensions: '.jsx'
        }
        // you may also pass an initializer function to chain other
        // browserify options, such as transformers
        // , b => b.exclude('mkdirp').transform(require('babelify'))
    );

    return {
        files: [
            { pattern: 'tests/phantomPolyfill.js', instrument: false},
            { pattern: 'src/**/*.js', load: false },

// Adding the instrument false to unexpected causes wallaby to hang
// Same thing when node_modules/jsdom/**/* is added to the instrument:false, load:false list
            { pattern: 'node_modules/unexpected-dom/**/*', instrument: false, load: false }

        ],

        tests: [
            { pattern: 'tests/*.spec.js', load: false}
        ],

        postprocessor: wallabyPostprocessor,

        bootstrap: function () {

            // required to trigger tests loading
            window.__moduleBundler.loadTests();
        }
    }
}