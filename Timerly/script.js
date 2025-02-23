let timer;
let seconds = 0;
let milliseconds = 0;
let isRunning = false;

function updateDisplay() {
    let hrs = String(Math.floor(seconds / 3600)).padStart(2, '0');
    let mins = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
    let secs = String(Math.floor(seconds % 60)).padStart(2, '0');
    let millis = String(Math.floor(milliseconds)).padStart(2, '0');

   
    document.getElementById('timer').textContent = `${hrs}:${mins}:${secs}:${millis}`;
}

function startTimer() {
    if (!isRunning) {
        isRunning = true;
        updateDisplay();
        timer = setInterval(() => {
            milliseconds += 1;
            if (milliseconds >= 100) {
                milliseconds = 0;
                seconds += 1;
            }
            updateDisplay();
        }, 10);
    }
}

function resetTimer() {
    clearInterval(timer);
    isRunning = false;
    seconds = 0;
    milliseconds = 0;
    updateDisplay();
}

function clearTimer() {
    clearInterval(timer);
    isRunning = false;
}
