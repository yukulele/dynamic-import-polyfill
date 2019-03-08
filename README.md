**Deprecated**: this repository is no longer maintained, use this instead:  https://github.com/uupaa/dynamic-import-polyfill

# dynamic `import()` polyfill

[ES proposal: `import()`](https://github.com/tc39/proposal-dynamic-import) polyfill for browsers

## Prerequisite

browser should support :

* [Promise()](https://developer.mozilla.org//docs/Web/JavaScript/Reference/Global_Objects/Promise)
* [fetch()](https://developer.mozilla.org//docs/Web/API/Fetch_API)

## Install

copy `dynamic-import-polyfill.js` in your script directory

add in `<head>`:

```html
<script src="./script/dynamic-import-polyfill.js"></script>
```

## Usage

because `import` is a reserved keyword, this polyfill use `_import` instead:

```javascript
_import('module.js').then(() => {
  // ... module loaded
})
```

Module should use nodejs `module.exports` syntax:

```javascript
var data = {
  foo: '1',
  bar() { return 2 }
}

module.exports = data
```

URL is relative to the document's URL, and not to the script executing.
