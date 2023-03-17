//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
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