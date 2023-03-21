//Скрипт загружает iframe из источника, переданного на страницу в get параметрах
window.onload = function(){
    let params = new URLSearchParams(window.location.search);

    //Опубликованный WebApp Копир Калькуляции
    let idWebApp = 'AKfycbwpzTWMPdSaKBswBmH53kuKfLY-_LCzkp4Z-uKv_DXFuogA5qEfKgSl0yMW8F2FQNyLTQ';
    let urlWebApp = 'https://script.google.com/macros/s/'+ idWebApp +'/exec';
    document.getElementById("webapp").setAttribute("src", urlWebApp +'?'+ params.toString());
}
    const events = ["pagehide", "pageshow", "unload", "load"];

const eventLogger = (event) => {
  switch (event.type) {
    case "pagehide":
    case "pageshow": {
      let isPersisted = event.persisted ? "persisted" : "not persisted";
      console.log(`Event: ${event.type} - ${isPersisted}`);
      break;
    }
    default:
      console.log(`Event: ${event.type}`);
      break;
  }
};

events.forEach((eventName) => window.addEventListener(eventName, eventLogger));

