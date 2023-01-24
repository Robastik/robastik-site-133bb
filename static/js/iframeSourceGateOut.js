//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);
    let urlWebApp = 'https://script.google.com/macros/s/AKfycby4fq5XEl-OQpI1F7BZ2AK1-e8sOS0Mv45SAiA1a8ZkvpiAPWi89iXFVSYLwkRYprrhVw/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp+'?'+params.toString());
}