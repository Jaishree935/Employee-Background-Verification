// Show registration form
function showRegisterForm() {
  document.getElementById("loginForm").style.display = "none";
  document.getElementById("registerForm").style.display = "block";
}

// Show login form
function showLoginForm() {
  document.getElementById("loginForm").style.display = "block";
  document.getElementById("registerForm").style.display = "none";
}

// Register using MongoDB backend
async function registerUserForm() {
  const uname = document.getElementById("newUsername").value.trim();
  const email = document.getElementById("newEmail").value.trim();
  const pwd = document.getElementById("newPassword").value.trim();

  if (!uname || !email || !pwd) {
    alert("Please fill all fields!");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: uname, email, password: pwd })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Registration successful! Please login now.");
      showLoginForm();
    } else {
      alert(data.message || "Registration failed!");
    }
  } catch (err) {
    console.error("Error during registration:", err);
    alert("Server not reachable. Please try again later.");
  }
}

// 🟢 User Login Function
async function userLogin() {
  const uname = document.getElementById("username").value.trim();
  const pwd = document.getElementById("password").value.trim();

  if (!uname || !pwd) {
    alert("Please enter both username and password!");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username: uname, password: pwd })
    });

    const data = await res.json();

    if (res.ok) {
      localStorage.setItem("currentUser", uname);
      alert("Login successful!");
      window.location.href = "user_apply.html";
    } else {
      alert(data.message || "Invalid username or password!");
    }
  } catch (err) {
    console.error("Error during login:", err);
    alert("Server not reachable. Please try again later.");
  }
}
