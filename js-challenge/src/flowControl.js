module.exports = {
  fizzBuzz : function(num) {
    return !isNaN(num) && ((num % 3 === 0 ? 'fizz' : '') + (num % 5 === 0 ? 'buzz' : '') || num)

    // Long version
    if (isNaN(num)) return false
    else if (num % 3 === 0 && numm % 5 === 0) return 'fizzbuzz'
    else if (num % 3 === 0) return 'fizz'
    else if (numm % 5 === 0) return 'buzz'
    else return num
  }

}
