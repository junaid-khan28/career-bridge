# 🎯 CareerBridge – Skill-Based Job & Internship Platform

**CareerBridge** is a skill-first job platform that reimagines hiring by requiring candidates to complete **mock interviews** and **assessments** before applying. It intelligently parses resumes, recommends relevant jobs, and offers a personalized dashboard to **track applications**, **manage profiles**, and **explore internships** — with **role-based access** for job seekers, recruiters, and admins.

---

## 📌 Project Overview

- **Product Name:** CareerBridge  
- **Goal:** A job/internship platform that smartly connects job seekers and recruiters, featuring role-based access, resume parsing, application tracking, and tailored job recommendations.

---

## 🗺️ Roadmap Milestones

### 🧱 Phase 1 – ✅ Project Setup (Completed)

| Task                             | Status | Priority | Notes                                |
|----------------------------------|--------|----------|--------------------------------------|
| Set up frontend with React + TS  | ✅     | ⭐️⭐️⭐️   | Used Vite for faster builds          |
| Set up backend with Node.js      | ✅     | ⭐️⭐️⭐️   | Modular folder structure completed   |
| Connect MongoDB Atlas            | ✅     | ⭐️⭐️⭐️   | Collections: users, jobs, applications |
| Setup `.env` files               | ✅     | ⭐️⭐️     | Envs secured for both frontend & backend |

---

### 🔐 Phase 2 – Auth & User Roles

| Task                             | Status | Priority | Notes                                  |
|----------------------------------|--------|----------|----------------------------------------|
| Signup & Login Pages             | 🔲     | ⭐️⭐️⭐️   | Role selection: Seeker / Recruiter / Admin |
| JWT Auth                         | 🔲     | ⭐️⭐️⭐️   | Access + refresh tokens (optional)     |
| Role-based Routing (Frontend)    | 🔲     | ⭐️⭐️⭐️   | ProtectedRoute logic                   |
| Secure Token Storage             | 🔲     | ⭐️⭐️     | Use Redux or LocalStorage              |

---

### 👨‍💼 Phase 3 – Job Seeker Features

| Feature                          | Status | Priority | Notes                                  |
|----------------------------------|--------|----------|----------------------------------------|
| Seeker Dashboard                 | 🔲     | ⭐️⭐️⭐️   | Stats: applied jobs, interview count   |
| Job Recommendations              | 🔲     | ⭐️⭐️⭐️   | Based on profile/resume skills         |
| Job Listings Page                | 🔲     | ⭐️⭐️⭐️   | Pagination, search, filters            |
| Job Detail + Apply               | 🔲     | ⭐️⭐️⭐️   | Disable if already applied             |
| Profile Form + Resume Upload     | 🔲     | ⭐️⭐️⭐️   | Upload + preview                       |
| Application Tracker              | 🔲     | ⭐️⭐️     | View status: Applied / Interviewing    |

---

### 🧑‍💼 Phase 4 – Recruiter Features

| Feature                          | Status | Priority | Notes                                  |
|----------------------------------|--------|----------|----------------------------------------|
| Recruiter Dashboard              | 🔲     | ⭐️⭐️⭐️   | Overview of jobs + applicants          |
| Post New Job Form                | 🔲     | ⭐️⭐️⭐️   | Fields: title, description, skills     |
| Job Management Table             | 🔲     | ⭐️⭐️     | Edit / Delete jobs                     |
| View Applicants                  | 🔲     | ⭐️⭐️⭐️   | Resume download, status updates        |

---

### ⚙️ Phase 5 – Admin Features

| Feature                          | Status | Priority | Notes                                  |
|----------------------------------|--------|----------|----------------------------------------|
| Admin Dashboard                  | 🔲     | ⭐️⭐️     | Charts, stats, usage overview          |
| Manage Users                     | 🔲     | ⭐️⭐️     | View by role, delete users             |
| Blog Management Panel            | 🔲     | ⭐️⭐️⭐️   | Add/Edit/Delete posts                  |
| Rich Blog Editor                 | 🔲     | ⭐️⭐️⭐️   | Optional markdown support              |

---

### 📰 Phase 6 – Public Blog Pages

| Feature                          | Status | Priority | Notes                                  |
|----------------------------------|--------|----------|----------------------------------------|
| Blog Homepage                    | 🔲     | ⭐️⭐️     | Grid/List layout                       |
| Blog Post Detail View            | 🔲     | ⭐️⭐️     | Render markdown or rich content        |
| Blog Filter + Search             | 🔲     | ⭐️       | By tag, category, or keyword           |

---

### 🧩 Phase 7 – Core Components / Utils

| Component                        | Status | Priority | Notes                                  |
|----------------------------------|--------|----------|----------------------------------------|
| Navbar (Role-Based)              | 🔲     | ⭐️⭐️⭐️   | Dynamic nav items                      |
| Footer                           | 🔲     | ⭐️       | Static pages, contact                  |
| Modal Component                  | 🔲     | ⭐️⭐️⭐️   | For confirmations or quick views       |
| Toast / Alert System             | 🔲     | ⭐️⭐️     | UX for form actions                    |
| ProtectedRoute Wrapper           | 🔲     | ⭐️⭐️⭐️   | Checks roles                           |
| Axios API Utils                  | 🔲     | ⭐️⭐️⭐️   | Token injection + error handling       |

---

### 🚀 Phase 8 – Bonus / Optional Features

| Feature                          | Status | Priority | Notes                                  |
|----------------------------------|--------|----------|----------------------------------------|
| Resume Parsing (Python Service)  | 🔲     | ⭐️⭐️     | Extract skills using NLP               |
| Realtime Chat (Seeker ↔ Recruiter)| 🔲     | ⭐️       | Socket.IO or Firebase                  |
| Notification System              | 🔲     | ⭐️⭐️     | Alerts for job status, new messages    |
| Admin Analytics Dashboard        | 🔲     | ⭐️       | Charts for usage, jobs, roles          |
| CV Template Generator            | 🔲     | ⭐️       | Select + export professional CVs       |

---

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite, Redux, Chakra UI
- **Backend**: Node.js, Express.js, MongoDB (Atlas)
- **Authentication**: JWT (Access Tokens)
- **Optional Tools**: Python (Resume Parsing), Chart.js, Socket.IO
- **Deployment**: Coming soon

---

## 🧪 Setup Instructions

> Make sure **Node.js** and **npm** are installed.

```bash
# Clone the repo
git clone https://github.com/junaid-khan28/careerbridge.git
cd careerbridge

# Frontend
cd client
npm install
npm run dev

# Backend
cd ../server
npm install
npm run dev
