var should = require('should');
var Layouter = require('./../src/layouter');
var tests = require('./tests_description.json');

describe('Layouter', function () {
    var layouter;

    before(function(){
        layouter = new Layouter();
    });

    tests.forEach(function(test){
        describe(test.name, function () {
            var result;
            var expect;

            beforeEach(function() {
                result = layouter.parse(test.ua);
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