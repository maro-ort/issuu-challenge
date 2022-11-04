
module.exports = {
  indexOf : (arr, item) => arr.indexOf(item),

  sum : arr => arr.reduce((acc, v) => acc + v, 0),

  remove : (arr, item) => arr.filter(v => v !== item),

  removeWithoutCopy : function(arr, item) {
    let index
    while((index = arr.indexOf(item)) !== -1) {
      arr.splice(index, 1)
    }
    return arr
  },

  append : (arr, item) => arr.push(item) && arr,

  truncate : arr => {
    arr.pop()
    return arr
  },

  prepend : (arr, item) => [ item, ...arr ],

  curtail : ([ first, ...arr]) => arr,

  concat : (arr0, arr1) => arr0.concat(arr1),

  insert : function(arr, item, index) {
    arr.splice(index, 0, item)
    return arr
  },

  count : (arr, item) => arr.filter(v => v === item).length,

  duplicates : function(arr) {
    // This method will sort the values as per Object keys rules
    // In this exercice it seems to be a requirement even if not mentioned,
    // other methods would require a final arr.sort()

    const countMap = arr.reduce((acc, value) => {
      !(value in acc) ? acc[value] = 1 : acc[value]++
      return acc
    }, {})

    return Object.entries(countMap).reduce((acc, [ key, count ]) => {
      if (count > 1) acc.push(key)
      return acc
    }, [])
  },

  square : arr => arr.map(v => v * v),
  squareAlternative : arr => arr.map(v => Math.pow(v, 2)),
  // squareES6 : arr => arr.map(v => v ** 2),

  findAllOccurrences : (arr, target) => arr.reduce((acc, v, index) => {
    if (v === target) acc.push(index)
    return acc
  }, [])

}