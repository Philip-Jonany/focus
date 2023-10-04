const timerContainer = document.querySelector(".timerContainer"); 

// time remaining in seconds
var time = 25 * 60;
var startAudio = new Audio('start.mp3')
var doneAudio = new Audio('done.mp3');
var intervalID;

function start () {
    intervalID = setInterval(updateTimer,1000);
    startAudio.play();
}

function pause() {
    clearInterval(intervalID);
}

function updateTimer() {
    if (time <= 0 ) {
        doneAudio.play()
        setTimeout(function(){doneAudio.play()}, 2000)
        clearInterval(intervalID);
    }

    const seconds = time % 60;
    const minutes = Math.floor(time / 60) % 60;
    document.querySelector(".seconds").innerText = seconds;
    document.querySelector(".minutes").innerText = minutes;
    time -=1;
}