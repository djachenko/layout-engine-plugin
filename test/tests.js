var should = require('should');
var LayoutEngine = require('./../src/layout-engine-plugin');
var tests = require('./tests_description.json');

describe('LayoutEngine', function () {
    var layoutEngine;

    before(function(){
        layoutEngine = new LayoutEngine();
    });

    tests.forEach(function(test){
        describe(test.name, function () {
            var result;
            var expect;

            beforeEach(function() {
                result = layoutEngine.parse(test.ua);
                expect = test.expect;
            });

            it("validity", function() {

                result.should.have.property("name");
                result.should.have.property("version");
            });

            it("correctness", function() {
                result.should.be.eql(expect);
            });
        });
    });
});