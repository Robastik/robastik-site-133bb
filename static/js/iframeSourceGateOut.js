//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    let idWebApp = 'AKfycbwY3J6S5pQPqmM9ilzPyJ9Hk6QsL0XX5T-KoMzGJPdQWDIJmg62PjlFaiKr5i2hgT-rRA';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}