//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    //Опубликованный WebApp Копир Калькуляции
    let idWebApp = 'AKfycbypJh9EvC_-7KU-tQGVcu8uv-1duY8oHMFW1s6fGUGBsoDTdHkftoGpJ_tAUAZjtMmLDg';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}