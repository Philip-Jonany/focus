const timerContainer = document.querySelector(".timerContainer"); 
const initialTime = 25 * 60;
// time remaining in seconds
var time = initialTime
var startAudio = new Audio('start.mp3')
var doneAudio = new Audio('done.mp3')
var intervalID

function start () {
    intervalID = setInterval(updateTimer,1000);
    startAudio.play();
}

function pause() {
    clearInterval(intervalID);
}

function updateTimer() {
    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    document.querySelector(".seconds").innerText = seconds;
    document.querySelector(".minutes").innerText = minutes;
    document.title = minutes + ":" + seconds;
    time -=1;

    if (time <= 0 ) {
        doneAudio.play()
        setTimeout(function(){doneAudio.play()}, 2000)
        clearInterval(intervalID)
        time = initialTime;
    }
}