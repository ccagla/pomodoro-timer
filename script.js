
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const pauseBtn = document.getElementById("pause");
const resetBtn = document.getElementById("reset");

let time = 25*60;
let interval;

function startTimer() {
    if (interval) return;

    interval = setInterval(() => {
        if (time <= 0) {
            clearInterval(interval);
            interval = null;
            return;
        }
        time--;
        updateTimer();
    }, 1000);
}

startTimer();
startBtn.addEventListener("click", startTimer);


function updateTimer() {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const formattedSeconds = seconds < 10 ? "0" + seconds : seconds;

    timeDisplay.textContent = `${minutes}:${formattedSeconds}`
};

function stopTimer() {
    clearInterval(interval);
    interval = null;
}
stopTimer();
pauseBtn.addEventListener("click", stopTimer);

