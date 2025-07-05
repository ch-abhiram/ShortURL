# 🔗 Short URL Generator

Welcome to the **Short URL Generator** — a simple yet powerful Node.js app that shortens long URLs and tracks click analytics, just like Bitly! 🚀

---

## 📸 Features

- 🔐 **Shorten any long URL** to a clean, shareable short ID
- 🚀 **Redirect** users to the original URL
- 📊 **Track analytics** like total clicks and timestamps
- ⚡ Built using **Express**, **MongoDB**, and **ShortID**

---

## 🧠 How It Works

1. You send a long URL to the API.
2. The app generates a short ID and stores it in MongoDB.
3. You can use that ID to:
   - Redirect users to the original URL
   - Track how many people have clicked it and when

---

## 🛠️ Tech Stack

- 🟢 **Node.js** + **Express** – Backend server
- 🍃 **MongoDB** – Database to store URLs and visit history
- 📦 **Mongoose** – MongoDB ODM
- ✂️ **shortid** – To generate unique short IDs

---

## 📦 Installation

```bash
git clone https://github.com/yourusername/short-url.git
cd short-url
npm install


short-url/
│
├── controllers/        # Request logic
├── models/             # Mongoose schemas
├── routes/             # Express route handlers
├── connect.js          # MongoDB connection
├── index.js            # Main server entry
└── README.md


