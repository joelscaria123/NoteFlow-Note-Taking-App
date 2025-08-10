# 📝 MERN Note App

A full-stack **note-taking application** built with the **MERN stack** (MongoDB, Express, React, Node.js) and styled with **TailwindCSS + DaisyUI**.  
Users can create, view, update, and delete notes with a clean, responsive UI.

---

## 🚀 Features

- 📌 **Create, Read, Update, Delete (CRUD)** notes
- 🎨 Beautiful UI with TailwindCSS + DaisyUI
- ⚡ **Fast loading** with Axios + React hooks
- 🔍 View detailed notes
- 🗑️ Delete with confirmation modal
- ⏱️ Timestamps with readable date formatting
- 🔄 Instant updates without page refresh
- 📱 Fully responsive

---

## 🛠️ Tech Stack

### **Frontend**
- React (Vite)
- TailwindCSS + DaisyUI
- Axios
- React Router
- React Hot Toast

### **Backend**
- Node.js
- Express
- MongoDB + Mongoose
- CORS
- dotenv

---

## 📂 Project Structure

```
/frontend   → React frontend
/backend   → Express backend
```

---

## 📦 Installation

### **1️⃣ Clone the repository**
```bash
git clone https://github.com/joelscaria123/NoteFlow-Note-Taking-App.git
cd mern-note-app
```

### **2️⃣ Install dependencies**
**Backend**
```bash
cd backend
npm install
```
**Frontend**
```bash
cd frontend
npm install
```

---

## ⚙️ Environment Variables

Create a `.env` file in the **server** folder:

```
PORT=5001
MONGO_URI=your-mongodb-connection-string
CLIENT_URL=http://localhost:5173
```

---

## ▶️ Run the App

### **Backend**
```bash
cd backend
npm run dev
```

### **Frontend**
```bash
cd frontend
npm run dev
```

Frontend runs at: **`http://localhost:5173`**  
Backend runs at: **`http://localhost:5001`**

---

## 🌐 CORS Setup (Backend)

In `server.js`:
```javascript
import cors from "cors";

app.use(cors({
  origin: ["http://localhost:5173", "https://your-production-url.com"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));
```

---

## 📸 Screenshots

| Home Page | Create Note |
|-----------|-------------|
| ![Home](screenshots/home.png) | ![Create](screenshots/create.png) |

---

## 🚀 Deployment

### **Frontend**
- Build with:
```bash
npm run build
```
- Deploy to **Vercel**, **Netlify**, or **GitHub Pages**

### **Backend**
- Deploy to **Render**, **Railway**, or **Heroku**
- Update `CLIENT_URL` in `.env` to match your frontend’s domain

---

## 📄 License
This project is licensed under the **MIT License**.

---

## 💡 Author
Built with ❤️ by **Joel Scaria**
