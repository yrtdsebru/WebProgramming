//�nce mysql ve node js�i indirip kurdum daha sonra terminale 'npm install mysql' komutunu yazarak npm paketlerini indirdim.
'use strict';  //yazaca��m�z kodun JavaScript standartlar� d���na ��kmas�n� �nler ve kodun kat� kurallar �er�evesi i�inde �al��t�r�lmas� gerekti�ini bildirir.

const mysql = require('mysql'); //mysql mod�l�n� bu de�i�kene ba�lad�k require ile.

//baglant�m�z� olusturmak icin once ozelliklerini belirtiyoruz
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'veritabani'
});

con.connect(function (err) {
  if (err) throw err;

 ////eployee tablosunda firstname'i Terri olanlar�n departman adini Executive olarak ayarla ve g�ncelle 
  var sorgu = "Update employee set DepartmentName='Executive' Where FirstName = 'Terri'";

  con.query(sorgu,function(err){
    if(err) throw err;
  });

    con.end();   //baglantiyi sonlandiriyoruz
});