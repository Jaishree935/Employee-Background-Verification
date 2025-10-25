function userLogin() {
  const uname = document.getElementById("username").value;
  const pwd = document.getElementById("password").value;

  const users = JSON.parse(localStorage.getItem("users")) || [];
  const validUser = users.find(u => u.username === uname && u.password === pwd);

  if (validUser) {
    localStorage.setItem("currentUser", uname);
    window.location.href = "user_dashboard.html";
  } else {
    alert("Invalid username or password!");
  }
}

function registerUser() {
  const uname = prompt("Enter new username:");
  const pwd = prompt("Enter new password:");
  let users = JSON.parse(localStorage.getItem("users")) || [];
  users.push({ username: uname, password: pwd });
  localStorage.setItem("users", JSON.stringify(users));
  alert("Registration successful!");
}

function applyJob() {
  const uname = localStorage.getItem("currentUser");
  const company = document.getElementById("company").value;
  const role = document.getElementById("role").value;
  const qualification = document.getElementById("qualification").value;
  const experience = document.getElementById("experience").value;

  const applications = JSON.parse(localStorage.getItem("applications")) || [];
  applications.push({
    username: uname,
    company,
    role,
    qualification,
    experience,
    status: "Pending Verification"
  });
  localStorage.setItem("applications", JSON.stringify(applications));

  alert("Application submitted successfully!");
  window.location.href = "user_dashboard.html";
}

function loadUserDashboard() {
  const uname = localStorage.getItem("currentUser");
  if (!uname) return (window.location.href = "user_login.html");

  document.getElementById("userName").innerText = uname;
  const applications = JSON.parse(localStorage.getItem("applications")) || [];
  const userApps = applications.filter(app => app.username === uname);

  const list = document.getElementById("statusList");
  list.innerHTML = userApps.length
    ? userApps.map(a => `<p>${a.company} - ${a.status}</p>`).join("")
    : "<p>No applications found.</p>";
}

function logout() {
  localStorage.removeItem("currentUser");
  window.location.href = "../index.html";
}

if (document.getElementById("statusList")) loadUserDashboard();
