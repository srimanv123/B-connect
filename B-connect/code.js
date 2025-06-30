let timeLeft = 20; // seconds
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
