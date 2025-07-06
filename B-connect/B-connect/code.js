let timeLeft = 20;
const timerEl = document.getElementById("time");
const progressEl = document.getElementById("progress");

const timerInterval = setInterval(() => {
  timeLeft--;
  timerEl.textContent = timeLeft;

  const progressWidth = (timeLeft / 20) * 100;
  progressEl.style.width = `${progressWidth}%`;

  if (timeLeft <= 0) {
    clearInterval(timerInterval);
    timerEl.textContent = "0";
    progressEl.style.width = "0%";
    document.querySelector(".mark-btn").disabled = true;
    document.querySelector(".mark-btn").style.backgroundColor = "#ccc";
    document.querySelector(".mark-btn").textContent = "Time Expired";
  }
}, 1000);


function showCode() {
  const code = localStorage.getItem("attendanceCode");
  const expiry = parseInt(localStorage.getItem("codeExpiry"));

  if (!code || !expiry) {
    document.getElementById("codeDisplay").textContent = "No active session.";
    return;
  }

  document.getElementById("codeDisplay").textContent = code;
  timerEl.textContent = expiry;

  function updateTimer() {
    const now = Date.now();
    const secondsLeft = Math.floor((expiry - now) / 1000);

    if (secondsLeft <= 0) {
      document.getElementById("time").textContent = "Code Expired";
      return;
    }

    const mins = String(Math.floor(secondsLeft / 60)).padStart(2, '0');
    const secs = String(secondsLeft % 60).padStart(2, '0');
    document.getElementById("timer").textContent = `${mins}:${secs}`;

    setTimeout(updateTimer, 1000);
  }

  updateTimer();
}

window.onload = showCode;
