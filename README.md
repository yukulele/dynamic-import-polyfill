# dynamic `import()` polyfill

[ES proposal: `import()`](https://github.com/tc39/proposal-dynamic-import) polyfill for browsers

## Prerequisite

browser should support :

* Map()
* Promise()
* fetch()

## Install

copy `dynamic-import-polyfill.js` in your `./js/` directory

add in `<head>`:

```html
<script src="js/dynamic-import-polyfill.js"></script>
```

## Usage

because `import` is a reserved keyword, this polyfill use `_include` instead:

```javascript
_import('module.js').then(() => {
  // ... module loaded
})
```

Your `module.js` should use nodejs syntaxe:

```javascript
var data = {
  foo: '1',
  bar() { return 2 }
}

module.exports = data
```
