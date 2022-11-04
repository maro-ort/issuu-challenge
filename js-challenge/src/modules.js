module.exports = {
  createModule : function(str1, str2) {
    return (function() {
      return {
        greeting: str1,
        name: str2,
        sayIt: function() { return `${this.greeting}, ${this.name}` }
      }
    })()
  }
}

