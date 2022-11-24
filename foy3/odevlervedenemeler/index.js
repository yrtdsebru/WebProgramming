'use strict';
const url = require('url');
let adres = url.parse('https://user:pass@sub.host.com:1453/p/a/t/h?query=string&query1=text#hash');
console.log(adres);