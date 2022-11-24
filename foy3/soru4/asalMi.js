function asalMi(x){
    var i, kalan, asal=1;
    if(x>1){   //asal sayılar dogal sayılardır. 0 ve 1 de asal degil 
        
        for(i = 2; i < x; i++){ // zaten hepsi 1'e ve kendisine bölünür, bu aralıkta kalanı 0 olan varsa yani1 ve kendisi arasında başka sayılardan birine daha bölünebiliyor demektir.
            kalan = x % i;
            if(kalan == 0){
                asal = 0;
                break; 
            }
       
        }  
        if(asal == 1)
            console.log(x+" asaldir.");
        else
            console.log(x+" degildir.");
    }
}
function range(k,l){
    var i;
    for(i=k; i<l; i++){
        asalMi(i);
    }       
}
//range(1,100);
asalMi(9);