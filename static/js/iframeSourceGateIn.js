//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);

    //Опубликованный WebApp Копир Калькуляции
    let idWebApp = 'AKfycbwpzTWMPdSaKBswBmH53kuKfLY-_LCzkp4Z-uKv_DXFuogA5qEfKgSl0yMW8F2FQNyLTQ';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}
    
var events = ["pageshow"];
var eventLogger = (event) => {
  switch (event.type) {
    case "pageshow": {
        if (event.persisted) {
            let params = new URLSearchParams(window.location.search);

            //Опубликованный WebApp Копир Калькуляции
            let idWebApp = 'AKfycbwpzTWMPdSaKBswBmH53kuKfLY-_LCzkp4Z-uKv_DXFuogA5qEfKgSl0yMW8F2FQNyLTQ';
            let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
            document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
        }
    break;
    }
  }
};
events.forEach((eventName) => window.addEventListener(eventName, eventLogger));

