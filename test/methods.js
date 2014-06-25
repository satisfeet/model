var chai  = require('chai');
var model = require('../lib');

describe('methods', function() {

  describe('#constructor(source)', function() {

    it('should set "attrs" to source', function() {
      var Model = model('Modal', {
        foo: Object
      });

      var result = new Model({
        foo: { bar: true }
      });

      chai.expect(result)
        .to.have.property('attrs')
        .to.have.property('foo')
        .to.have.property('bar')
        .to.be.true;
    });

  });

  describe('#id', function() {

    it('should return id attribute', function() {
      var Model = model('Model');

      var result = new Model({ id: '1234' });

      chai.expect(result.id)
        .to.equal('1234');
    });

  });

  describe('#get(key)', function() {

    beforeEach(function() {
      var Model = model('Model', {
        foo: String,
        obj: Object
      });

      this.model = new Model({
        foo: 'bar',
        obj: { hey: { ho: true } }
      });
    });

    it('should return value by key', function() {
      chai.expect(this.model.get('foo'))
        .to.equal('bar');
    });

    it('should return value by path', function() {
      chai.expect(this.model.get('obj.hey.ho'))
        .to.be.true;
    });

  });

  describe('#set(key, value)', function() {

    beforeEach(function() {
      var Model = model('Model', {
        name: String,
        price: Number,
        address: {
          city: String,
          zip: Number
        }
      });

      this.model = new Model();
    });

    it('should set name', function() {
      this.model.set('name', 'Bodo');

      chai.expect(this.model.get('name'))
        .to.equal('Bodo');
    });

    it('should cast types', function() {
      this.model.set('price', '2.99');
      this.model.set('address.zip', '29999');

      chai.expect(this.model.get('price'))
        .to.equal(2.99);
      chai.expect(this.model.get('address.zip'))
        .to.equal(29999);
    });

  });

  describe('#toJSON()', function() {

    it('should return attrs without empty values', function() {
      var Model = model('Model');

      var result = new Model({
        foo: {}, bar: [], baz: true
      });

      chai.expect(result.toJSON())
        .to.not.have.keys([
          'foo',
          'bar'
        ]);
      chai.expect(result.toJSON())
        .to.have.property('baz')
        .to.be.true;
    });

  });

});
