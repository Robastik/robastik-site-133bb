//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    //анимация прелоадера
    //или в css, inline не собирается
    let divBackground = document.getElementsByClassName("iframeHolder")[0];
    divBackground.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/robastik-2cb02.appspot.com/o/page%2FPreloader_webapp.gif?alt=media&token=7a9b01d9-99a1-4ebe-9276-2d37bf9d4941')";
    divBackground.style.backgroundRepeat = "no-repeat";
    divBackground.style.backgroundPosition = "50% 0%";
    //divBackground.style.backgroundSize  = "5% 5%";

    let params = new URLSearchParams(window.location.search);
    let idWebApp = 'AKfycbzkC_Syl8y-ca1a1FMqAmSSFh2421BZvDpobE51Fod6Hy6fg4gnK5fDtMe7mfVavvHMww';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}