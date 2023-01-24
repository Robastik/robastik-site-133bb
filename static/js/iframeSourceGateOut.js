//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    let urlWebApp = 'https://script.google.com/macros/s/AKfycbxOTYJMv9Qhp6d9HzUor_UHMChNfDO8ZmGaBNMYBQCbBdHihAgypU8TaiDa64-3z0X-Hw/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp+'?'+params.toString());
}