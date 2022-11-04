module.exports = {
  alterContext : function(fn, obj) {
    return fn.bind(obj)()
  },

  alterObjects : function(constructor, greeting) {
    constructor.prototype.greeting = greeting
  },

  iterate : function(obj) {
    return Object.entries(obj).map(([ key, value ]) => `${key}: ${value}`)
  }
}
