'use strict';
// foo nesnesi ve topla,cikaricarp,bol metotları
//Bu nesne module.exports anahtar kelimesiyle modül olarak ihraç edilmesi için kullanılır.
//Node.js ile herhangi bir nesne, fonksiyon, değişken tanımladıktan sonra module.exports veya exports anahtar kelimelerini 
//kullanarak diğer dosyalarda da yazılan kodların kullanımını sağlayabiliriz.

module.exports= {
    sayi1: 0,
    sayi2: 0,
    topla: function(){
        return this.sayi1 + this.sayi2;
    },
    cikar: function(s1,s2){
        return this.sayi1 - this.sayi2;
    },
    carp: function(s1,s2){
        return this.sayi1*this.sayi2;
    },
    bol: function(){
        return this.sayi1/this.sayi2;
    }
}