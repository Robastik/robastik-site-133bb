//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    //Для мобильных показывать инструкцию для перехода на Desktop site
    if((/mobi/).test(window.navigator.userAgent.toLowerCase())){
        const iframeSource = "https://firebasestorage.googleapis.com/v0/b/robastik-2cb02.appspot.com/o/page%2FturnMobileOption.html?alt=media&token=50134dbf-d460-467a-97e9-511732b23026";
        document.getElementById("builder").setAttribute("src", iframeSource);
        document.getElementById("builder").setAttribute("height", "2000");
    }else{//для десктопа показать google sheet калькуляцию
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
