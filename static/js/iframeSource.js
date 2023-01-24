//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    console.log(window.location.search);
    let params = new URLSearchParams(window.location.search);
    let fileId = params.get('fileId'); // spreadsheet ID
    console.log(fileId);
    let sheetId = params.get('sheetId'); // gid → sheet ID 
    console.log(sheetId);
    let iframeSource = 'https://docs.google.com/spreadsheets/d/'+fileId+'/edit?usp=sharing&rm=minimal#gid='+sheetId;
    console.log(iframeSource);
    document.getElementById("myframe").setAttribute("src", iframeSource);
  }