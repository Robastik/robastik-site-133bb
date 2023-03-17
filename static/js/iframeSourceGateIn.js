//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);

    //Опубликованный WebApp Копир Калькуляции
    let idWebApp = 'AKfycby5IrLGiddCN6CgYfwvoKJcEoHs7ypmhOcZQ3-4ZsZBmF4QjnNNWZz5mrwYaSeibFGlEA';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}