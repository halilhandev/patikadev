let inputName = prompt("Enter your name: ")
let myname = document.getElementById("myName");
myname.innerHTML = inputName


let myClock = document.querySelector("#myClock");

function showTime() {
    var currentDate = new Date();
    var days = [
    "Pazar",
    "Pazartesi",
    "Salı",
    "Çarşamba",
    "Perşembe",
    "Cuma",
    "Cumartesi",
    ];

    myClock.innerHTML = `
      ${currentDate.getHours().toString().padStart(2, "0")}:${currentDate.getMinutes()}:${currentDate.getSeconds()} ${
      days[currentDate.getDay()]
    }`;
  
  
    
}

setInterval(showTime, 1000);



