//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);

    //Опубликованный WebApp Копир Калькуляции
    let idWebApp = 'AKfycbxid1XtyGei_9fFgnGpgtsr3o8T7bB2pYrcBUk1lHICbeEj1JI8EpFC1-BnwrVnyWJIDQ';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}
    
(function () {
    window.onpageshow = function(event) {
        if (event.persisted) {
            window.location.reload();
        }
    };
})();

