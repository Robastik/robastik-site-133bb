//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    let idWebApp = 'AKfycbyeszEmOWYxnkE1aSIt_h6DWm3RM1wXiEz_55sKXipHI0-AXws2k3CwZjpMCEx1ihYydQ';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}