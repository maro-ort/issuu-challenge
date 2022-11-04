/**
 * This file defines an object with some methods. Some of these methods are
 * populated incorrectly; your job is to fix them. Other methods are not
 * populated at all; your job is to fill them out.
 */

module.exports = {
  globals : function() {
    const myObject = { name : 'Jory' }
    return myObject;
  },

  functions : function(flag) {
      if (flag) {
          function getValue() { return 'a'; }
      } else {
          function getValue() { return 'b'; }
      }

      return getValue();
  },

  parseInt : function(num) {
      return parseInt(num, 10);
  },

  identity : (val1, val2)  => val1 === val2

}
