{
  const map = []
  window._import = url => {
    if (url in map) {
      return map[url]
    }
    const promise = fetch(url)
      .then(reponse => reponse.text())
      .then(text => {
        const fct = new Function('module', text)
        const module = { exports: {} }
        fct(module)
        return module.exports
      })
    map[url] = promise
    return promise
  }
}
