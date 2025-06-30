function togglePassword(id) {
  const field = document.getElementById(id);
  field.type = field.type === "password" ? "text" : "password";
}

function handleSignUp(event) {
  event.preventDefault();

  const username = document.getElementById("username").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  // Step 1: Get existing users from localStorage
  const users = JSON.parse(localStorage.getItem("users")) || [];

  // Step 2: Check for duplicate usernames
  const userExists = users.some(user => user.username === username);
  if (userExists) {
    alert("Username already exists!");
    return false;
  }

  // Step 3: Add new user
  const newUser = { username, email, password };
  users.push(newUser);

  // Step 4: Save back to localStorage
  localStorage.setItem("users", JSON.stringify(users));

  alert("Account created successfully!");
  window.location.href = "login.html"; 
  return true;
}
