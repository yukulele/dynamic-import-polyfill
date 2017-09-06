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

because `import` is a reserved keyword, this polyfill use `_import` instead:

```javascript
_import('module.js').then(() => {
  // ... module loaded
})
```

Module should use `module.exports` nodejs syntaxe:

```javascript
var data = {
  foo: '1',
  bar() { return 2 }
}

module.exports = data
```
