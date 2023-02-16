//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    //Опубликованный WebApp Копир Калькуляции
    let idWebApp = 'AKfycbxOkMOAURw__jV36Z22L2GIIOmYKFrG-OnjeXXgMJk32_GGmmlY_n7xyjv5dnnGl84ptQ';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}