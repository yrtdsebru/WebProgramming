//Önce mysql ve node js’i indirip kurdum daha sonra terminale 'npm install mysql' komutunu yazarak npm paketlerini indirdim.
'use strict'; //yazacaðýmýz kodun JavaScript standartlarý dýþýna çýkmasýný önler ve kodun katý kurallar çerçevesi içinde çalýþtýrýlmasý gerektiðini bildirir.

const mysql = require('mysql'); //mysql modülünü bu deðiþkene baðladýk require ile.

//baglantýmýzý olusturmak icin once ozelliklerini belirtiyoruz
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: ''
});

//burada baglantimizi gerceklestiriyoruz
con.connect(function (err) {
  if (err) throw err;

  //veritabanimizi olusturmak icin sql'e yollayacagimiz sorgu
  var sorgu = "CREATE Database veritabani";

  //sorguyu calistiriyoruz ve veri tabani olusuyor. Olusmazsa hata mesaji aliriz.
  con.query(sorgu,function(err){
    if(err) throw err;
  });

  con.end();  //baglantiyi sonlandiriyoruz
});