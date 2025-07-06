function handleReset(event) {
  event.preventDefault();
  const email = document.getElementById("email").value.trim();

  if (!email) {
    alert("Please enter a valid email address.");
    return false;
  }

  // Mock action - replace with backend logic if needed
  alert(`A reset link has been sent to ${email}`);
  return false;
}
