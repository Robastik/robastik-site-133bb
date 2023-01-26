//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    let idWebApp = 'AKfycbzi0ZzRkDE0lYLLvS9X3yT-HGfIIAfiH4JpKDQhBe7Vknjuo2p6N1IpU28uJ8A3Fm4g7Q';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}