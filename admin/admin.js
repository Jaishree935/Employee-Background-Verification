function adminLogin() {
  const user = document.getElementById("adminUser").value;
  const pass = document.getElementById("adminPass").value;

  if (user === "admin" && pass === "admin123") {
    localStorage.setItem("adminLogged", "true");
    window.location.href = "admin_dashboard.html";
  } else {
    alert("Invalid admin credentials!");
  }
}

function loadAdminDashboard() {
  const logged = localStorage.getItem("adminLogged");
  if (!logged) return (window.location.href = "admin_login.html");

  const applications = JSON.parse(localStorage.getItem("applications")) || [];
  const list = document.getElementById("applicationList");

  list.innerHTML = applications.length
    ? applications
        .map(
          (a, i) => `
        <div class="app-card">
          <p><b>${a.username}</b> applied for <b>${a.role}</b> at ${a.company}</p>
          <p>Status: <b>${a.status}</b></p>
          <button onclick="updateStatus(${i}, 'Verification Completed')">Mark as Verified</button>
          <button onclick="updateStatus(${i}, 'Selected')">Mark as Selected</button>
        </div>
      `
        )
        .join("")
    : "<p>No applications yet.</p>";
}

function updateStatus(index, newStatus) {
  const applications = JSON.parse(localStorage.getItem("applications")) || [];
  applications[index].status = newStatus;
  localStorage.setItem("applications", JSON.stringify(applications));
  loadAdminDashboard();
}

function logout() {
  localStorage.removeItem("adminLogged");
  window.location.href = "../index.html";
}

if (document.getElementById("applicationList")) loadAdminDashboard();
