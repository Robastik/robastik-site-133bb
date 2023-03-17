//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);

    if(params.has("height")){//высота iframe
        //для прайс-листа надо меньше высоты
        document.getElementById("webapp").setAttribute("height", '"'+ params.get("height") +'"');
    }else{
        //по умолчанию и для генератора счетов высота 2000 норм
        document.getElementById("webapp").setAttribute("height", "2000");
    }

    //Опубликованный WebApp Копир Калькуляции
    let idWebApp = 'AKfycbxeZvn0vZSy1MzmvlRtmsXIi2qD6D0uMc11NnY8Yh81NYf0ak4z24-BuOhJ1hNDl49yrg';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}