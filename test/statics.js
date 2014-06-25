var chai  = require('chai');
var model = require('../lib');

describe('statics', function() {

  describe('model(name)', function() {

    it('should return a constructor with name', function() {
      var result = model('Customer');

      chai.expect(result)
        .to.be.a('function')
        .to.have.keys([
          'model',
          'schema',
          'statics',
          'methods',
        ])
        .to.have.property('model')
        .to.equal('Customer');
    });

  });

  describe('#statics(statics)', function() {

    it('should add statics to constructor', function() {
      var Model = model('Model')
        .statics({
          static: function() {
            return 'foo';
          }
        });

      chai.expect(Model)
        .to.have.property('static')
        .to.be.a('function');

      chai.expect(Model.static())
        .to.equal('foo');
    });

  });

  describe('#methods(methods)', function() {

    it('should add methods to constructor prototype', function() {
      var Model = model('Model')
        .methods({
          hello: function(name) {
            return 'Hello ' + name;
          }
        });

      chai.expect(new Model().hello('Bodo'))
        .to.equal('Hello Bodo');
    });

  });

});
