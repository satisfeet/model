var mpath = require('mpath');

// shortcut to id
Object.defineProperty(exports, 'id', {
  get: function() {
    return this.get('id');
  }
});

exports.get = function(key) {
  return mpath.get(key, this.attrs);
};

exports.set = function(key, value) {
  if (typeof key === 'object') {
    value = key;

    for (var key in value) {
      this.set(key, value[key], this);
    }
  } else {
    value = cast(key, value, this);

    mpath.set(key, value, this.attrs);
  }

  return this;
};

exports.toJSON = function() {
  var obj = {};

  for (var key in this.attrs) {
    var value = this.attrs[key];

    if (typeof value === 'object') {
      if (value.length || Object.keys(value).length) {
        obj[key] = value;
      }
    } else {
      obj[key] = value;
    }
  }

  return obj;
};

function cast(key, value, model) {
  var type = mpath.get(key, model.schema);

  if (type && typeof type !== 'object') {
    value = type(value);
  }

  return value;
}
