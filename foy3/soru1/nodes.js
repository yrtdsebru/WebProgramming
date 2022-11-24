//�nce mysql ve node js�i indirip kurdum daha sonra terminale 'npm install mysql' komutunu yazarak npm paketlerini indirdim.
'use strict'; //yazaca��m�z kodun JavaScript standartlar� d���na ��kmas�n� �nler ve kodun kat� kurallar �er�evesi i�inde �al��t�r�lmas� gerekti�ini bildirir.

const mysql = require('mysql'); //mysql mod�l�n� bu de�i�kene ba�lad�k require ile.

//baglant�m�z� olusturmak icin once ozelliklerini belirtiyoruz
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