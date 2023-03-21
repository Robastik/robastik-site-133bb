//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);

    //Опубликованный WebApp Копир Калькуляции
    let idWebApp = 'AKfycbwpzTWMPdSaKBswBmH53kuKfLY-_LCzkp4Z-uKv_DXFuogA5qEfKgSl0yMW8F2FQNyLTQ';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}
window.addEventListener ('pageshow', function (event) {
    if (event.persisted) {
      console.log ('Эта страница восстановлена ​​из BFcache.');
    } else {
      console.log ('Эта страница загрузилась по запросу.');
    }
});