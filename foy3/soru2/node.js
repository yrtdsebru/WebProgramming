'use strict';
var fs = require('fs'); 

function polinom(j,param){
    var x = param.charAt(j);  
    var a = param.charAt(j+2);
    var b = param.charAt(j+4);
    var c = param.charAt(j+6);
    var A = a*x*x + b*x + 1*c; // c 'yi de 1 ile carp yoksa toplamıyor
    console.log(A);
}

//eger options(utf-8) vermez karisik veriler cikar
fs.readFile('quiz 6.txt', 'utf-8', function(err, data) {
    var i=0;
    var j=0;   
    for(i=0; i<data.split('\n').length;i++){

        //if hata varsa konsola yazdır
        if (err)
            console.log(err);
        else{                //                  Index
            polinom(j,data);//     0   1   2   3   4   5   6   7   8     
            j=j+9;          //    "3"+","+"5"+","+"4"+","+"7"+"\"+"n" yani bir satırda 0'dan 8'e kadar index var. 
        }        
    }
});

