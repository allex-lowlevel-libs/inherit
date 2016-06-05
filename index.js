function inherit (child, parnt) {
  child.prototype = Object.create(parnt.prototype,{constructor:{
    value: child,
    enumerable: false,
    configurable: false,
    writable: false
  }});
}

function attachMethod (chld, parnt, name) {
  chld.prototype[name] = parnt.prototype[name];
}

function inheritMethods (child, parnt) {
  var methods = Array.prototype.slice.call(arguments, 2);
  if (!methods.length) throw 'Avoid calling this function with no methods to inherit';
  methods.forEach(attachMethod.bind(null, child, parnt));
  methods = null;
  child = null;
  parnt = null;
}

module.exports = {
  inherit: inherit,
  inheritMethods: inheritMethods
};
