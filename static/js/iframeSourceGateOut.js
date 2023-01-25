//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    let idWebApp = 'AKfycby7Smfby6_9L2AJbBWdTokX8NdLGH4bQET7Pv86MwyvgfJTRUdPbvRnP7KnU9NyS7HXGA';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}