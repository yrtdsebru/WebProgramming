'use strict';
const fs = require('fs');

function bulEkle(min,mak, dizi){
    for(var i=0; i<mak ; i++){   //0'dan başlayıp dizideki maksimum değere kadar tarıyor
        var varr=0;
        for(var j=0; j<dizi.length; j++){
            if(i==dizi[j]){      //içinde aranan sayı varsa varr flag'i 1 oluyor
                varr=1;
                break;
            }
        }
        if(varr==0){             //içinde o sayı hiç yoksa var flag'i 0 kalıyor ve append ile ekleniyor dosyaya.
            fs.appendFileSync("tum_sayilar.txt", i+', ');
        }
    }
}

fs.readFile("asal_sayi.txt","utf-8",function(err,data){
    if(err)
        console.log(err);
    else{
        const dizi = data.split(', ');  //asal_sayılar.txt'deki sayıları virgülden ayırarak dizi değişkenine char char ekledik. 
        var min = dizi[0];
        var mak = dizi[0]; 

        //dizi arreyindeki elemanlar char tipinde ve 2>11 gibi görünüyor 20>11 gibi o yüzden hepsini number'a çevirip diziye tekrar atıyorum 
        for(var i=0;i<dizi.length;i++){
            dizi[i]=parseInt(dizi[i]);
        }

        //dizideki en küçük ve en büyük sayıyı bulmak min, ve mak değerlerini karşılaştırarak en büyük ve en küçük değelerini aratıyoruz.
        for(var i=0;i<dizi.length;i++)
        {
            //min dizideki değerden büyükse mini dizideki ile değiştiriyoruz.
            if (min > dizi[i])
                 min = dizi[i];

            //mak dizideki değerden küçükse makı dizideki değer ile değiştiriyoruz.
            if (mak < dizi[i])  
                mak = dizi[i]; 

        }
        
        bulEkle(min,mak,dizi);
    }
}); 









