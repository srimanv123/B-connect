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
