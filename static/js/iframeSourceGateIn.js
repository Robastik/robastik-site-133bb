//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    //Опубликованный WebApp Копир Калькуляции
    let idWebApp = 'AKfycbwCH0LaPgo_cngpwAqAOcobeDGLwE4ZVaXSChbpVj477rTZWS17SoV0WaekaPLu51s2Wg';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}