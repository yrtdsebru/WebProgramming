//Önce mysql ve node js’i indirip kurdum daha sonra terminale 'npm install mysql' komutunu yazarak npm paketlerini indirdim.
'use strict';  //yazacaðýmýz kodun JavaScript standartlarý dýþýna çýkmasýný önler ve kodun katý kurallar çerçevesi içinde çalýþtýrýlmasý gerektiðini bildirir.

const mysql = require('mysql'); //mysql modülünü bu deðiþkene baðladýk require ile.

//baglantýmýzý olusturmak icin once ozelliklerini belirtiyoruz
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'veritabani'
});

con.connect(function (err) {
  if (err) throw err;

 ////eployee tablosunda firstname'i Terri olanlarýn departman adini Executive olarak ayarla ve güncelle 
  var sorgu = "Update employee set DepartmentName='Executive' Where FirstName = 'Terri'";

  con.query(sorgu,function(err){
    if(err) throw err;
  });

    con.end();   //baglantiyi sonlandiriyoruz
});