function generateCode() {
  const code = Math.random().toString(36).substring(2, 8).toUpperCase();
  document.getElementById("code").value = code;
}

function startSession() {
  const code = document.getElementById("code").value.trim();
  const duration = parseInt(document.getElementById("duration").value.trim());

  if (!code || isNaN(duration) || duration <= 0) {
    alert("Please enter a valid code and duration.");
    return;
  }

  alert(`Attendance session started!\nCode: ${code}\nDuration: ${duration} seconds`);
  // You can store or broadcast code/duration here (e.g., with backend or localStorage)
}

function startSession() {
  const code = document.getElementById('code').value.trim();
  const duration = parseInt(document.getElementById('duration').value);

  if (!code || isNaN(duration) || duration <= 0) {
    alert("Enter a valid code and time duration.");
    return;
  }

  const expiry = Date.now() + duration * 1000;

  // Save code and expiry to localStorage
  localStorage.setItem("attendanceCode", code);
  localStorage.setItem("codeExpiry", expiry.toString());

  alert(`Attendance code "${code}" is live for ${duration} seconds.`);

  // Optional: Open viewer page or update a display
  // window.open(".html", "_blank");
}

