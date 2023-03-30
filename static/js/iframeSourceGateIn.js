//Опубликованный WebApp Копир Калькуляции
//!!! И в следующей безымянной функции


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

    //даем ссылку на демо или реальный шаблон договора
    let demoLicenseLink = 'https://firebasestorage.googleapis.com/v0/b/robastik-2cb02.appspot.com/o/sampleLegalDocs%2F%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%20%D0%B4%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B0%20%D0%94%D0%B5%D0%BC%D0%BE.pdf?alt=media&token=2fd7df81-fb80-4074-9812-67d4184ce708';
    let realLicenseLink = 'https://firebasestorage.googleapis.com/v0/b/robastik-2cb02.appspot.com/o/sampleLegalDocs%2F%D0%A8%D0%B0%D0%B1%D0%BB%D0%BE%D0%BD%20%D0%B4%D0%BE%D0%B3%D0%BE%D0%B2%D0%BE%D1%80%D0%B0.pdf?alt=media&token=5a1487d2-2c53-43b2-ad4c-470087975484';

    if(params.has("rm")){
        let realMode = params.get('rm');
        if(realMode){
            let licenseLink = realLicenseLink
        }else{
            let licenseLink = demoLicenseLink
        }
    }else{
        let licenseLink = demoLicenseLink
    }

    //ссылка без адреса
    let licenseLinkElement = document.querySelector('a[href=""]');
    licenseLinkElement.href = licenseLink;

    //Опубликованный WebApp Копир Калькуляции
    //!!! И в следующей безымянной функции
    let idWebApp = 'AKfycbwTH9cMnU5xKASAYNQeP6onGMI9kQ8uLjH8OO9d_BXpq9-oyfk1KWHLPCBO5i5y2ObO';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}
    
(function () {
    window.onpageshow = function(event) {
        if (event.persisted) {
            let params = new URLSearchParams(window.location.search);

            //Опубликованный WebApp Копир Калькуляции
            let idWebApp = 'AKfycbwTH9cMnU5xKASAYNQeP6onGMI9kQ8uLjH8OO9d_BXpq9-oyfk1KWHLPCBO5i5y2ObO';
            let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
            document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
        }
    };
})();

