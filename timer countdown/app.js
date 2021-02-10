
// difined the variables 

var start = document.getElementById("start");
var reset = document.getElementById("reset");
var h = document.getElementById("hours");
var m = document.getElementById("mints");
var s = document.getElementById("seconds");

// the function wich gonna dicremint and caculate the time 
function timer() {
    if (h.value == 0 && m.value == 0 && s.value == 0) {
        h.value = 0;
        m.value = 0;
        s.value = 0;
    } else if (s.value != 0) {
        s.value--;
    } else if (m.value != 0 && s.value == 0) {
        m.value--;
        s.value = 59;
    } else if (h.value != 0 && m.value == 0) {
        h.value--;
        m.value = 59;
    } return;
}
// i don't know what the hell is this 
// i just followed a tetorial
// thw wrter of this said this variabal store a reference to the startTimer variable
var initialTime = null;


start.addEventListener("click", function () {
    function startCount() {
        initialTime = setInterval(function () {
            timer();
        }, 1000);
    }
    startCount();
});

reset.addEventListener("click", function () {
    h.value = 0;
    s.value = 0;
    m.value = 0;
});

function stopInterval() {
    clearInterval(initialTime);
}