//Önce mysql ve node js’i indirip kurdum daha sonra terminale 'npm install mysql' komutunu yazarak npm paketlerini indirdim.
'use strict'; //yazacağımız kodun JavaScript standartları dışına çıkmasını önler ve kodun katı kurallar çerçevesi içinde çalıştırılması gerektiğini bildirir.

const mysql = require('mysql'); //mysql modülünü bu değişkene bağladık require ile.

//baglantımızı olusturmak icin once ozelliklerini belirtiyoruz
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'veritabani'
});

con.connect(function (err) {
  if (err) throw err;

  //eployee tablosunda departman adi Engineering olanlarin tüm bilgilerini seç 
  var sorgu = "SELECT * FROM employee where DepartmentName='Engineering'";

  con.query(sorgu,function(err,sonuc){
    if(err) throw err;
    console.log(sonuc); //tüm sonuclar
    console.log(sonuc[2].FirstName);  //3.satırın adı
  });


    con.end();  //baglantiyi sonlandiriyoruz
});