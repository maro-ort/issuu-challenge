module.exports = {
  valueAtBit: function(num, bit) {
    const binary = num.toString(2)
    return bit > binary.length ? 0 : parseInt(binary[binary.length - bit])
  },

  base10: (str) => parseInt(str, 2),

  convertToBinary: (num) => ('00000000' + num.toString(2)).slice(-8),

  multiply: function(a, b) {
    // The right way if we really want proper precision
    // import Big from 'big.js'
    // return Big(a).times(Big(b))

    // Using ?. would allow us to use const and remove 2 lines
    // const aDecimals = a.toString().split('.')[1]?.length || 0

    let aDecimals = a.toString().split('.')[1]
    let bDecimals = b.toString().split('.')[1]

    aDecimals = aDecimals ? aDecimals.length : 0
    bDecimals = bDecimals ? bDecimals.length : 0

    const precision = Math.pow(10, aDecimals + bDecimals)

    return Math.round(a * b * precision) / precision
  }
}
