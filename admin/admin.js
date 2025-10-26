// Function to check admin credentials
function adminLogin() {
  const user = document.getElementById("adminUser").value.trim();
  const pass = document.getElementById("adminPass").value.trim();

  // Hardcoded admin username and password
  if (user === "admin" && pass === "admin123") {
    // Set a flag in localStorage to remember login
    localStorage.setItem("adminLogged", "true");
    // Redirect to admin dashboard
    window.location.href = "admin_dashboard.html";
  } else {
    alert("Invalid admin credentials!");
  }
}

// Check if admin is logged in (for dashboard page)
function loadAdminDashboard() {
  const logged = localStorage.getItem("adminLogged");
  if (!logged) {
    // If not logged in, redirect to login page
    window.location.href = "admin_login.html";
  }

  // Load applications if available
  const applications = JSON.parse(localStorage.getItem("applications")) || [];
  const list = document.getElementById("applicationList");

  if (list) {
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
}

// Update status of an application
function updateStatus(index, newStatus) {
  const applications = JSON.parse(localStorage.getItem("applications")) || [];
  applications[index].status = newStatus;
  localStorage.setItem("applications", JSON.stringify(applications));
  loadAdminDashboard();
}

// Logout admin
function logout() {
  localStorage.removeItem("adminLogged");
  window.location.href = "admin_login.html";
}

// Auto-load dashboard if element exists
if (document.getElementById("applicationList")) loadAdminDashboard();
