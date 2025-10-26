// Redirect if admin is not logged in
const logged = localStorage.getItem("adminLogged");
if (!logged) {
  window.location.href = "admin_login.html";
}

// Load applications
function loadAdminDashboard() {
  const applications = JSON.parse(localStorage.getItem("applications")) || [];
  const list = document.getElementById("applicationList");

  if (applications.length === 0) {
    list.innerHTML = "<p style='color:white;text-align:center;'>No applications yet.</p>";
    return;
  }

  list.innerHTML = applications.map((a, i) => `
    <div class="app-card">
      <p><b>${a.username}</b> applied for <b>${a.role}</b> at <b>${a.company}</b></p>
      <p>Status: <b>${a.status}</b></p>
      <button class="verify-btn" onclick="updateStatus(${i}, 'Verification Completed')">Mark as Verified</button>
      <button class="select-btn" onclick="updateStatus(${i}, 'Selected')">Mark as Selected</button>
    </div>
  `).join("");
}

// Update status
function updateStatus(index, newStatus) {
  const applications = JSON.parse(localStorage.getItem("applications")) || [];
  applications[index].status = newStatus;
  localStorage.setItem("applications", JSON.stringify(applications));
  loadAdminDashboard();
}

// Logout
function logout() {
  localStorage.removeItem("adminLogged");
  window.location.href = "admin_login.html";
}

// Initialize dashboard
loadAdminDashboard();
