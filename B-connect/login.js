function togglePassword() {
  const pwd = document.getElementById("password");
  pwd.type = pwd.type === "password" ? "text" : "password";
}
function handleLogin(event) {
  event.preventDefault();

  const enteredUsername = document.getElementById("username").value.trim();
  const enteredPassword = document.getElementById("password").value;

  // Get stored users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Search for matching user
  const matchedUser = users.find(
    user => user.username === enteredUsername && user.password === enteredPassword
  );

  if (matchedUser) {
    window.location.href = "main.html";
    // You can store session info and redirect if needed
    localStorage.setItem("loggedInUser", JSON.stringify(matchedUser));
     // Or redirect to attendance page
  } else {
    alert("Invalid username or password.");
  }
}




