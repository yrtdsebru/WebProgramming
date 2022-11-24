'use strict';

const http = require('http');

const sunucu = http.createServer(function (request, response) {
});

sunucu.listen(1453);  // port.hostname,callback

console.log('Sunucu çalışıyor...');