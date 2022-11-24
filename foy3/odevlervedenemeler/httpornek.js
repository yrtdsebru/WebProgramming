'use strict';
const http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200,{"Content-Type": "text/html"}); //html şeklinde yazabilirz artık, aslında defaultu html çalışır yine 
    res.write(req.url);
    if(req.url == "/home")
        res.write("anasayfa");
    else if(req.url == "/login")
        res.write("giriş sayfası");
    
    res.write('<h1>Helllo</h1>');
    res.end('Merhaba Node.js');
}).listen(1453);

console.log('Sunucu çalışıyor...');