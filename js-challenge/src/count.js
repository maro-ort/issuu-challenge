
module.exports = {
  count : function (start, end) {
    console.log(start)
    const interval = setInterval(() => {
      console.log(++start)
      if (start >= end) clearInterval(interval)
    }, 100)

    return {
      cancel: () => clearInterval(interval)
    }
  }

}

