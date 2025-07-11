# 🔗 Short URL Generator (Full Stack - Node.js + MongoDB + EJS)

Welcome to the **Short URL Generator** — a full-stack web application built using **Node.js**, **MongoDB**, and **EJS**. It allows you to shorten long URLs and track click analytics through a clean web interface.

---

## 📸 Features

- 🔐 **Shorten long URLs** via web UI or API
- 🌐 **Redirect** users using short URLs
- 📊 **Track total clicks & timestamp history**
- 🖥️ **EJS-powered Frontend** for interactive user experience
- ⚡ RESTful API for developers

---

## 🧠 Tech Stack

- 🟢 **Backend**: Node.js + Express
- 🍃 **Database**: MongoDB (Mongoose ODM)
- 🖼️ **Frontend**: EJS Templates
- ✂️ **Short ID Generator**: `shortid`

---

## 📁 Project Structure
```csharp
short-url/
│
├── controllers/        # Request logic
├── models/             # Mongoose schemas
├── routes/             # Express route handlers
├── connect.js          # MongoDB connection
├── index.js            # Main server entry
├── .gitignore          # Prevents tracking node_modules, env files
└── README.md
```

## 📦 Installation

```bash
git clone https://github.com/ch-abhiram/ShortURL.git
cd short-url
npm install
```

---
🖼️ Web Interface

Submit a long URL through a form

Get a short URL instantly

Track total visits and analytics

All powered by EJS templates
---

💡 Future Plans

✅ Web-based analytics UI (chart + table)

🧪 Add unit tests

🌍 Deploy to Render/Netlify/Vercel

🔐 Add user accounts & login
