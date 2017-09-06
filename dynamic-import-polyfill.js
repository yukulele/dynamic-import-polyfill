{
  const map = new Map()
  window._import = url => {
    if (map.has(url)) {
      return map.get(url)
    }
    const promise = fetch(url)
      .then(reponse => reponse.text())
      .then(text => {
        const fct = new Function('module', text)
        const module = { exports: {} }
        map.set()
        fct(module)
        return module.exports
      })
    map.set(url, promise)
    return promise
  }
}
