module.exports = {
  containsNumber : str => /\d/.test(str),

  containsRepeatingLetter : str => /([a-zA-Z])\1/.test(str),

  endsWithVowel : str => /[aeiouAEIOU]$/.test(str),

  captureThreeNumbers : str => {
    // return str.match(/\d{3}/)?.[0] || false
    const found = str.match(/\d{3}/)
    return found ? found[0] : false
  },

  matchesPattern : str => /^\d{3}-\d{3}-\d{4}$/.test(str),

  isUSD : str => {
    return /^\$([0-9]{1,3},([0-9]{3},)*[0-9]{3}|[0-9]+)(\.[0-9][0-9])?$/.test(str)
  }
}
