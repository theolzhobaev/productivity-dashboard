document.addEventListener("DOMContentLoaded", () => {
    const timerEl = document.getElementById("timer");
    const startBtn = document.getElementById("startPomodoro");
    const resetBtn = document.getElementById("resetPomodoro");

    if (!timerEl || !startBtn || !resetBtn) return;

    let seconds = 25 * 60;
    let interval = null;

    function updateDisplay() {
        const m = String(Math.floor(seconds / 60)).padStart(2, "0");
        const s = String(seconds % 60).padStart(2, "0");
        timerEl.textContent = `${m}:${s}`;
    }

    function start() {
        if (interval) return;
        interval = setInterval(() => {
            if (seconds > 0) {
                seconds--;
                updateDisplay();
            } else {
                clearInterval(interval);
                interval = null;
                alert("Pomodoro fertig!");
            }
        }, 1000);
    }

    function reset() {
        clearInterval(interval);
        interval = null;
        seconds = 25 * 60;
        updateDisplay();
    }

    startBtn.addEventListener("click", start);
    resetBtn.addEventListener("click", reset);

    updateDisplay();
});
