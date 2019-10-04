{
  const map = []

  window._import = url => {
    url = relativeURL(url)
    if (url in map) {
      return map[url]
    }
    const promise = fetch(url)
      .then(response => response.text())
      .then(text => {
        const fct = new Function('module', text)
        const module = { exports: {} }
        fct(module)
        return module.exports
      })
    map[url] = promise
    return promise
  }

  function relativeURL(url) {
    if (url.indexOf('./') !== 0) return url
    const e = new Error()
    if (!e.stack) return url
    const lines = e.stack.split('\n')
    if (!lines[0].includes('://')) lines.shift()
    const line = lines[2].match(/([a-z]+:.*)(:[0-9]+){2}$/)
    if (!line) return url
    return new URL(url, line[1]).href
  }
}
