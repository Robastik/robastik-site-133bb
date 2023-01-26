//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    let idWebApp = 'AKfycbw4ZnhlAOthd-1VYXNfudLwR0ZIBDDRCGpJMom2OCbh2RekY69y9TRKOkxvQZfzKlqlHw';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}