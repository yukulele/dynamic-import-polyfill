{
  const map = []
  window._import = url => {
    if (url.indexOf('./') === 0) {
      const e = new Error();
      const calledFile = e.stack.split('\n')[2].match(/[a-z]+:[^:]+/);
      url = calledFile[0]+'/.'+url;
    }
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
