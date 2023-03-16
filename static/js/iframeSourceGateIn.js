//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    //Опубликованный WebApp Копир Калькуляции
    let idWebApp = 'AKfycbym-E_M3nSy1ifaoJZy_lXY5xPYDh8cZTOUP6WEV7j7eKSC_cEy1VuBT1Ikz3sq3nS-_g';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}