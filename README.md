# 🔗 Short URL Generator

Welcome to the **Short URL Generator** — a modern, full-stack URL shortener and analytics platform.  
Built with Node.js, Express, MongoDB, and EJS, this project allows you to shorten links, manage your short URLs, and view detailed click analytics through a clean and modern UI.

## 🌍 Live Demo

[**Try it now!**](https://shorturl-olxo.onrender.com)  
> https://shorturl-olxo.onrender.com

---

## 📸 Features

- 🌐 **Shorten long URLs** via web interface
- ↔️ **Automatic redirection** using short URLs
- 📊 **Track clicks & timestamp history** for each link
- 👤 **User accounts:** Signup, Login, Personal Dashboard
- 🖥️ **EJS-powered frontend** for a smooth experience
- ⚡ **RESTful API** for developers & integration

## 🧠 Tech Stack

- **Backend:** Node.js + Express
- **Database:** MongoDB (Atlas, via Mongoose)
- **Frontend:** EJS Templates
- **Short ID Generator:** shortid
- **Password Security:** bcryptjs

## 📁 Project Structure
```csharp
short-url/
│
├── controllers/        # Request logic (routes' handler functions)
├── middlewares/        # Express middlewares (auth, etc.)
├── models/             # Mongoose schemas (User, URL)
├── routes/             # Express routers (user, url, static)
├── views/              # EJS front-end templates
├── db/                 # MongoDB connection utility (db.js)
├── index.js            # Main server entry
├── .gitignore          # Ignores node_modules, .env, etc.
├── package.json        # Project dependencies & scripts
└── README.md           # This documentation

```

```bash
# 1. Clone the repo
git clone https://github.com/ch-abhiram/ShortURL.git

# 2. Go into the project directory
cd short-url

# 3. Install dependencies
npm install

# 4. Create a .env file at the project root with the following:
PORT=8000
MONGO_URI=your-mongodb-connection-uri
SESSION_SECRET=your-session-secret

# 5. Start the application
npm start
```

---

## 🖼️ Web Interface Highlights

- **Submit a long URL** and get a short URL instantly
- **View your URL history** and analytics (number of clicks, visits)
- **Copy and share** your personalized short links easily
- **Secure authentication** for your data

---

## ⚡ API Endpoints

| Method | Endpoint                  | Description                       |
|--------|---------------------------|-----------------------------------|
| POST   | `/url`                    | Create a new short URL            |
| GET    | `/:shortId`               | Redirect to the original URL      |
| GET    | `/url/analytics/:shortId` | Get click analytics for a shortId |

> _API is authenticated. Please login to access user-specific routes._

---

## 💡 Future Improvements

- 🧪 Add unit & integration tests
- 📊 Richer analytics UI (charts, filters)
- 🔐 OAuth and social login
- ✉️ Email verification/password reset
- 🌍 Custom domain support

---

## ✨ Author

- **GitHub:** [ch-abhiram](https://github.com/ch-abhiram)

---
