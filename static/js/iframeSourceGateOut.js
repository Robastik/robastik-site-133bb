//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    let idWebApp = 'AKfycbyEbt74AqFQBILdQXApdWaXjQuYEB9MoQGo4wHMfHc965jiSzZ5gr1tArD2bwdT_x27ig';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}