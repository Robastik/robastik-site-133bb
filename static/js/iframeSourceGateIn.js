//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let divBackground = document.getElementsByClassName("post-content")[0];
    divBackground.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/robastik-2cb02.appspot.com/o/Preloader_webapp.gif?alt=media&token=e6306d2f-4e41-4fd8-aabc-066f0a097095')";
    divBackground.style.backgroundRepeat = "no-repeat";
    divBackground.style.backgroundPosition = "50% 20%";



    let params = new URLSearchParams(window.location.search);

    //Опубликованный WebApp Копир Калькуляции
    let idWebApp = 'AKfycbxid1XtyGei_9fFgnGpgtsr3o8T7bB2pYrcBUk1lHICbeEj1JI8EpFC1-BnwrVnyWJIDQ';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}
    
(function () {
    window.onpageshow = function(event) {
        if (event.persisted) {
            let params = new URLSearchParams(window.location.search);

            //Опубликованный WebApp Копир Калькуляции
            let idWebApp = 'AKfycbxid1XtyGei_9fFgnGpgtsr3o8T7bB2pYrcBUk1lHICbeEj1JI8EpFC1-BnwrVnyWJIDQ';
            let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
            document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());

            //window.location.reload();
        }
    };
})();

