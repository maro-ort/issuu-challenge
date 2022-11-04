module.exports = {
  argsAsArray : function(fn, arr) {
    return fn(...arr)
    // return fn.apply(null, arr)
  },

  speak: (fn, obj) => fn.call(obj),
  // speak : function(fn, obj) {
  //   return fn.call(obj)
  // },

  functionFunction : (str) => (str1) => [str, str1].join(', '),
  // functionFunction : function(str) {
  //   return function(str1) {
  //     return [ str, str1].join(', ')
  //   }
  // },


  makeClosures : (arr, fn) => arr.map((v) => () => fn(v)),

  partial : function(fn, str1, str2) {
    return str3 => fn(str1, str2, str3)
  },

  useArguments : function() {
    return Array.from(arguments).reduce((acc, v) => acc + v, 0)
  },

  callIt: function(fn) {
    const [_, ...args] = arguments
    return fn(...args)
  },

  partialUsingArguments : function(fn) {
    const [_, ...args] = arguments
    return (...args2) => fn(...args, ...args2)
  },

  curryIt : function(fn) {
    return x => y => z => fn.call(null, x, y, z)
  }
}

