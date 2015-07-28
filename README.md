# Layouter
Lightweight JavaScript-based plugin for browser layout engine detection. Written in vanilla Javascript, it doesn't depend on any other library

[![Build Status](https://travis-ci.org/djachenko/layouter.svg?branch=master)](https://travis-ci.org/djachenko/layouter)

## Installatiion
###As jQuery plugin
Include script after the jQuery library:
```html
<script src="/path/to/layouter.js"></script>
```

###As standalone library
Simply include this script to your page:
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
For running tests execute following command:
```sh
npm test
```
Tests are described in test/tests_description.json using following format:
```js
{
    "name"    : "Gecko", //test name
    "ua"      : "Mozilla/5.0 (X11; Linux x86_64; rv:2.0b9pre) Gecko/20110111 Firefox/4.0b9pre", //user agent string which will be passed as parameter to Layouter.parse()
    "expect"  : //result expected to be returned
    {
        "name"    : "Gecko", //layout engine name
        "version" : "2.0b9pre" //its version
    }
}
```

