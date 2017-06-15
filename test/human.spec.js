var chai = require('chai'); // invokes expect by default

var expect = chai.expect;
var should = chai.should();
var Human = require('../human.js');

describe('Human Class', function() {

  var human = Human;
  var nakaz;

  beforeEach(function(){
    nakaz = new Human('Nakaz');
  });

  it('should be a function', function(){
    expect(human).to.be.a('function');
  });

  it('should have property name', function(){
    expect(nakaz.name).to.equal('Nakaz');
  });

  it('should have a method sayName()', function(){
    expect(nakaz.sayName).to.be.a('function');
    expect(nakaz.sayName()).to.equal('Nakaz');
  });

});