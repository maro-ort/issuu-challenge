module.exports = {
  listFiles: function(data, dirName) {

    const getFiles = (data, dirToFind = false, result = [], parentMatch = false) => {
      const addFromCurrent = !dirToFind || parentMatch || data.dir === dirToFind
      data.files.forEach(item => {
        if (typeof item === 'string') {
          if (addFromCurrent) result.push(item)
        }
        else getFiles(item, dirToFind, result, addFromCurrent)
      })
      return result
    }

    return getFiles(data, dirName)
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
}
