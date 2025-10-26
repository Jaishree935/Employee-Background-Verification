# Employee-Background-Verification

Project Description:

CareerConnect is a web-based platform designed to streamline the employee recruitment and background verification process.
It provides a two-sided interface – one for job seekers (users) and another for administrators (HR/verifiers).

User Side Features:

1.User Registration & Login (MongoDB Backend)
    -Users can create an account and log in securely.
    -Authentication handled through backend API (http://localhost:5000).
2.Job Listings & Search Filter
    -Displays job cards for 12+ top companies (Microsoft, Google, Amazon, etc.).
    -Real-time search bar filters jobs by company name.
    -Access restricted to logged-in users. 
3.Job Application Submission
    -Users can apply for multiple jobs.
    -Application details stored in localStorage.
    -Duplicate applications are prevented. 
4.Application Dashboard
    -Displays applied jobs and current status (“Pending Verification”).
    -Encourages transparency and user engagement.
5.User Profile Popup
    -Fetches and displays user data (username, email) from backend API.
6.Contact & Feedback Section
    -Collects user feedback with instant acknowledgment pop-up.
7.Dynamic Login/Logout Button
    -Login button auto-changes to Logout when user session is active.

Admin Side Features:

1.Admin Login Panel
    -Secure access for admin to manage user data.
2.View All Applications
    -Displays users, companies applied, and current status.
3.Update Verification Status
    -Admin can change “Pending” → “Verified” or “Rejected”.
4.Data Persistence
    -Communicates with backend database for user/application data.

Tech Stack Used:

Layer	                Technology
Frontend	            HTML5, CSS3, JavaScript
Styling & Icons	      Google Fonts, Font Awesome
Backend	              Node.js(MongoDB Connection)
Database	            MongoDB (for users and applications)
Storage (Temporary)	  localStorage for session & applications
Server Communication	Fetch API (HTTP Requests) 


Key Functional Highlights:

    -Login authentication using backend APIs
    -Search and apply with login validation
    -Local storage for application tracking
    -Real-time profile popup fetching from backend
    -Fully responsive design with modern gradients and glassmorphism cards
    -Seamless user navigation with section toggles


Project Completion Summary:

Module	                             Completion
Frontend (User Interface)	           100%
User Login & Register Integration	   100%
Job Apply + Dashboard                100%
Admin Dashboard UI	                 90% (Backend linkage pending)
Backend (Node + MongoDB)	           In progress / API integrated partially
Overall Project Completion	         ~90–95% completed

