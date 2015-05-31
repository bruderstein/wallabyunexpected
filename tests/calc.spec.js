

var expect = require('unexpected');

var calc = require('../src/calc');
// Removing require('unexpected-dom') fixes the SyntaxError, and causes the tests to run
var unexpectedDom = require('unexpected-dom');



describe('calc', function () {

    describe('add', function () {
        it('should add two numbers', function () {

            var result = calc.add(3, 5);
            expect(result, 'to equal', 8);

        });

    });
});