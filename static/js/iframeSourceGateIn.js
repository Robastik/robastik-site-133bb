//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    //Опубликованный WebApp Копир Калькуляции
    let idWebApp = 'AKfycbxw6EY5oY5sCINnyJ7LjxJ2wnNXqWvINcaXYWEYO16aQW5-nCqXhJf6SWimwSDRxe4JDA';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}