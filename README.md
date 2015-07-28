# Layouter
Small plugin library for browser layout engine detection

Lightweight JavaScript-based plugin for browser layout engine detection. Written in vanilla Javascript, it doesn't depend on any other library

[![Build Status](https://travis-ci.org/djachenko/layouter.svg?branch=master)](https://travis-ci.org/djachenko/layouter)

## Installatiion
###As jQuery plugin
Include script after the jQuery library:
```html
<script src="/path/to/layouter.js"></script>
```

###As standalone library
Simply include this script
```html
<script src="/path/to/layouter.js"></script>
```

###As node.js module:
```sh
npm install layouter
```
```js
var Layouter = require('layouter');
```

##Usage
###As jQuery plugin
```js
$.layout.name
```
Returns browser name determined from user agent string

```js
$.layout.version
```
Returns layout engine version as string

###Without jQuery
```js
window.layout.name
```
Returns browser name determined from user agent string

```js
window.layout.version
```
Returns layout engine version as string

###As node.js module for parsing user agent string
```js
var layouter = new Layouter();
var layout = layouter.parse(uaString);
```

```js
layout.name
```
Returns browser name determined from user agent string

```js
layout.version
```
Returns layout engine version as string

## Development
### Test
```sh
npm test
```

