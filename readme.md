# preact-lively

Small wrapper around preact component which provides onload/onunload callbacks similar to [bel](https://github.com/shama/bel#lifecycle-events) because sometimes you don't need to be fancy.

**In progress... Not published yet!**

```
npm i ???
```

## Usage

```js
var Lively = require('preact-lively')
var h = require('preact').h

h(Lively, {
  onload: el => console.log('Here I am!'),
  onunload: el => console.log('There I go!')
}, children)
```
