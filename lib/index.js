var statics = require('./statics');
var methods = require('./methods');

module.exports = function(name, schema) {
  if (!name) throw new Error('"name" is required.');

  function Model(source) {
    this.attrs = {};
    this.schema = schema || {};

    Object.keys(this.schema).forEach(function resolve(key) {
      var type = schema[key];

      if (typeof type === 'object') {
        if (Array.isArray(type)) {
          this.attrs[key] = [];
        } else {
          this.attrs[key] = {};
        }
      } else {
        this.attrs[key] = new type();
      }
    }, this);

    if (source) this.set(source);
  }

  Model.model = name;

  for (var key in statics) {
    Model[key] = statics[key];
  }
  Model.prototype = methods;

  return Model;
};
