exports.schema = function(schema) {
  this.schema = schema;

  return this;
};

exports.statics = function(statics) {
  for (var key in statics) {
    this[key] = statics[key];
  }

  return this;
};

exports.methods = function(methods) {
  for (var key in methods) {
    this.prototype[key] = methods[key];
  }

  return this;
};
