let changeImg = document.getElementById("bulb-img");
let changeHeading = document.getElementById("main-heading");

function turnOn(){
    changeImg.src = 'bulb-on.png';
    changeHeading.innerHTML = "Turn the bulb off !";
}

function turnOff(){
    changeImg.src = 'bulb-off.png';
    changeHeading.innerHTML = "Turn the bulb on !";
}