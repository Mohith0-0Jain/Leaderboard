# 🏆 Leaderboard App – TripleW Internship Task

This project is a dynamic leaderboard system built as part of the Round 1 assignment for TripleW Solutions internship.

## 🚀 Features

- 🔘 **User Selection & Creation** – Select from existing users or add new ones.
- 🎯 **Claim Points** – Claim random points (1–10) for a selected user.
- 📊 **Live Leaderboard** – Automatically ranks users by total points.
- 👑 **Top 3 Highlights** – Separate cards for top 3 scorers (Gold, Silver, Bronze).
- 📜 **Claim History** – Shows each user's past point claims with timestamps.
- 🎨 **Modern UI** – Fully styled using Bootstrap and React Icons.
- 💾 **MongoDB Integration** – Data stored and fetched in real-time.

---

## 🛠️ Tech Stack

| Frontend         | Backend              | Database |
|------------------|----------------------|----------|
| React.js         | Node.js + Express.js | MongoDB  |
| Bootstrap 5      | Mongoose (ODM)       | MongoDB Atlas / Local |
| React Icons      | CORS + dotenv        |          |

---

## 📁 Project Structure
├── backend/
│ ├── models/ # User & ClaimHistory schemas
│ ├── controllers/ # Backend logic
│ ├── routes/ # API routes
│ ├── server.js # Main backend entry
│ └── db.js # MongoDB connection
├── frontend/
│ ├── components/ # React UI components
│ ├── App.js # Main layout
│ ├── index.js # React entry point
│ └── api.js # Axios base config (optional)