//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    //Для мобильных показывать инструкцию для перехода на Desktop site
    if((/mobi/).test(window.navigator.userAgent.toLowerCase())){
        const iframeSource = "https://firebasestorage.googleapis.com/v0/b/robastik-2cb02.appspot.com/o/page%2FturnMobileOption.html?alt=media&token=5e9a1718-fc00-431d-8f36-9ccdb65f3f8a";
        document.getElementById("builder").setAttribute("src", iframeSource);
        document.getElementById("builder").setAttribute("height", "1500");
    }else{//для десктопа показать google sheet калькуляцию
        //анимация прелоадера
        let divBackground = document.getElementsByClassName("iframeHolder")[0];
        divBackground.style.backgroundImage = "url('https://firebasestorage.googleapis.com/v0/b/robastik-2cb02.appspot.com/o/page%2FPreloader_webapp.gif?alt=media&token=7a9b01d9-99a1-4ebe-9276-2d37bf9d4941')";
        divBackground.style.backgroundRepeat = "no-repeat";
        divBackground.style.backgroundPosition = "50% 0%";

        alert("Смотреть Прайс-лист");

        let params = new URLSearchParams(window.location.search);

        if(params.has("height")){//высота iframe
            //для прайс-листа надо меньше высоты
            document.getElementById("builder").setAttribute("height", params.get("height"));
        }else{
            //по умолчанию и для генератора счетов высота 2000 норм
            document.getElementById("builder").setAttribute("height", "2000");
        }
        
        let fileId = params.get('fileId'); // spreadsheet ID
        let sheetId = params.get('sheetId'); // gid → sheet ID
        let iframeSource = 'https://docs.google.com/spreadsheets/d/'+fileId+'/edit?usp=sharing&rm=minimal#gid='+sheetId;
        document.getElementById("builder").setAttribute("src", iframeSource);
    }
}
