_import('./module.js').then(_ => {
  console.log(_)
  if (_.ok) document.body.textContent = 'ok!'
})
