const timerContainer = document.querySelector(".timerContainer"); 
const initialTime = 25 * 60;
const restTime = 5 * 60;


// time remaining in seconds
var time = initialTime
var ticking = false
var startAudio = new Audio('start.mp3')
var doneAudio = new Audio('done.mp3')
var intervalID

function start () {
    startAudio.play();
    if (ticking) {
        time = initialTime;
    }
    else {
        intervalID = setInterval(updateTimer, 1000);
        ticking = true;
    }
}

function rest () {
    startAudio.play();
    if (ticking) {
        time = restTime
    }
    else {
        intervalID = setInterval(updateTimer, 1000);
        ticking = true;
    }
}

function pause() {
    if (ticking) {
        clearInterval(intervalID);
        ticking = false;
    }
}

function updateTimer() {
    time -= 1;
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    document.querySelector(".seconds").innerText = seconds;
    document.querySelector(".minutes").innerText = minutes;
    document.title = minutes + ":" + seconds;

    if (time <= 0 ) {
        doneAudio.play()
        setTimeout(function(){doneAudio.play()}, 1000)
        clearInterval(intervalID)
        time = initialTime;
    }
}