//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    let fileId = params.get('fileId'); // spreadsheet ID
    let sheetId = params.get('sheetId'); // gid → sheet ID
    let iframeSource = 'https://docs.google.com/spreadsheets/d/'+fileId+'/edit?usp=sharing&rm=minimal#gid='+sheetId;
    document.getElementById("builder").setAttribute("src", iframeSource);
}