//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    let idWebApp = 'AKfycbyuRk-1lhrO-kTn41MxhKNqezI9CNRx9ZP8LeKoMthr7shqntz_b1hAIVneeDRCuGSUvg';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}