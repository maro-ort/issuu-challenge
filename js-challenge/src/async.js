module.exports = {
  async : (value) => Promise.resolve(value),

  manipulateRemoteData : (url) => fetch(url)
    .then(r => r.json())
    .then(({ people }) => people.map(({ name }) => name).sort())

}
