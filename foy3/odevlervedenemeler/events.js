'use strict';
const events = require('events'); //events modülü çeşitli eylemler için olay tanımlamaya imkan verir.
const eventEmitter = new events.EventEmitter(); 

function mesaj(msj) {
    console.log(msj);
}
eventEmitter.on('mesaj', mesaj); //EventEmitter nesnesi içerisinde yer alan on metodu ile bir olay oluşturulur.
eventEmitter.emit('mesaj', 'Dışarıdan bir mesaj'); //Bir olayı tetiklemek için EventEmitter nesnesi içerisinde yer alan emit metodu kullanılır.
eventEmitter.emit('mesaj', 'Dışarıdan bir mesaj');
eventEmitter.emit('mesaj', 'Dışarıdan bir mesaj');

function merhaba() {
    console.log('Merhaba Dünya');
}
eventEmitter.once('yaz', merhaba); //Bazen bir olayın sadece bir kere gerçekleşmesi istenebilir.
eventEmitter.emit('yaz');
eventEmitter.emit('yaz');
eventEmitter.emit('yaz');