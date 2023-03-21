//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);

    //Опубликованный WebApp Копир Калькуляции
    let idWebApp = 'AKfycbwpzTWMPdSaKBswBmH53kuKfLY-_LCzkp4Z-uKv_DXFuogA5qEfKgSl0yMW8F2FQNyLTQ';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", "https://firebasestorage.googleapis.com/v0/b/robastik-2cb02.appspot.com/o/page%2Fpreloader.html?alt=media&token=be7ee1fb-8cca-493c-a552-8ea45a3b3e4a");
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());

    window.addEventListener ('pageshow', function (event) {
        console.log ('pageshow');
        const navigationType = performance.getEntriesByType('navigation')[0].type;
        if (event.persisted || navigationType == 'back_forward' ) {
          console.log ('Эта страница восстановлена ​​из BFcache.');
        } else {
          console.log ('Эта страница загрузилась по запросу.');
        }
    });
}
