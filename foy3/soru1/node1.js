//Önce mysql ve node js’i indirip kurdum daha sonra terminale 'npm install mysql' komutunu yazarak npm paketlerini indirdim.

'use strict';  //yazacağımız kodun JavaScript standartları dışına çıkmasını önler ve kodun katı kurallar çerçevesi içinde çalıştırılması gerektiğini bildirir.

const mysql = require('mysql');  //mysql modülünü bu değişkene bağladık require ile.

//baglantımızı olusturmak icin once ozelliklerini belirtiyoruz
var con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'veritabani'   //once tabi database'imiz yoksa olusturmaliyiz "nodes.js" dosyasında ornek kod var. Benim veritabani isimli database'im var. 
});


//burada baglantimizi gerceklestiriyoruz
con.connect(function (err) {
  if (err) throw err;

  //tabloyu ve ozelliklerini olusturduk
  //primary key onemli olmayinca hata veriyor.
  var sorgu = "CREATE TABLE Employee(EmployeeId INT AUTO_INCREMENT NOT NULL,FirstName VARCHAR(30) NOT NULL,LastName VARCHAR(30) NOT NULL,DepartmentName VARCHAR(50) NOT NULL,PRIMARY KEY (EmployeeId))";

  //olusturdugumuz sorguyu gonderiyoruz
  con.query(sorgu,function(err){
    if(err) throw err;  //hata varsa ekrana veriyor hatayi yakalayip
  });

  //olusturdugumuz tabloya ekleyecegimiz veriler ve ekleme sorgusu
  var que ="INSERT INTO Employee(FirstName,LastName,DepartmentName) values ?";
  var values = [
    ["Ken","Sanchez","Executive"],
    ["Terri","Duffy","Engineering"],
    ["Roberto","Tamburello","Engineering"],
    ["Rob","Walters","Engineering"],
    ["Gail","Erickson","Engineering"],
    ["Jossef","Goldberg","Engineering"],
    ["Dylan","Miller","Support"],
    ["Diane","Margheim","Support"],
    ["Gigi","Matthew","Support"],
    ["Michael","Raheem","Support"]
  ];

  //tabloya veri ekle
  con.query(que,[values],function(err){
    if(err) throw err;
  });

  /*delete
  con.query("DELETE FROM Employee Where EmployeeId=2",function(err){
    if(err) throw err;
  });*/

  /*select order by sırali ,, DESC,,, ASC
  con.query("select * from Employee order by EmployeeId ",function(err,sonuc){
    if(err) throw err;
    console.log(sonuc);
  });*/

    con.end();  //baglantiyi sonlandiriyoruz
});