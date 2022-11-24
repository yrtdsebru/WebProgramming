'use strict';

const foo = require('./foo'); //foo nesne veri türü çünkü modül nesne türü

foo.sayi1= 40;
foo.sayi2 = 10;

console.log(foo.topla());
console.log(foo.carp());
console.log(foo.cikar());
console.log(foo.bol());