# 📔 Personal Diary Web App

A modern, secure, and professional **Personal Diary** web application built with **Node.js**, **Express**, **MongoDB Atlas**, and **EJS**, featuring a clean dark UI, smooth interactions, and cloud deployment readiness.

---

## 🚀 Live Demo
> (Add your Render URL here after deployment)


---

## ✨ Features

- 📝 Create and store personal diary entries  
- ☁️ Cloud database using MongoDB Atlas  
- 🔐 Secure environment variable handling (no credentials in code)  
- 🎨 Modern, professional dark UI (developer-preferred color palette)  
- 📱 Responsive layout (desktop & mobile friendly)  
- 🔄 “Read More / Read Less” for long diary entries  
- ⚡ Smooth scrolling experience  
- 🛠 Ready for free cloud deployment  

---

## 🧠 Tech Stack

| Technology | Usage |
|----------|------|
| Node.js | Backend runtime |
| Express.js | Web framework |
| MongoDB Atlas | Cloud database |
| Mongoose | MongoDB ODM |
| EJS | Server-side rendering |
| CSS (Modern Dark UI) | Styling |
| Nodemon | Development server |
| Render | Free cloud hosting |

---

## 📂 Project Structure

personal-diary/
│
├── models/
│ └── diary.js
│
├── public/
│ └── css/
│ └── style.css
│
├── views/
│ ├── home.ejs
│ └── add.ejs
│
├── .env # Environment variables (NOT pushed)
├── .gitignore
├── package.json
├── server.js


---

## ⚙️ Environment Variables

Create a `.env` file in the project root:

MONGO_URI=your_mongodb_atlas_connection_string
PORT=3000


> ⚠️ `.env` is ignored using `.gitignore` for security.

---

## 🛠 Installation & Setup (Local)

### 1️⃣ Clone the Repository


### 2️⃣ Install Dependencies

npm install

http://localhost:3000


---

## ☁️ Deployment (Render)

- Add **Environment Variables** in Render dashboard:
  - `MONGO_URI`
  - `NODE_ENV=production`

- Build Command:



Render automatically provides HTTPS and live deployment.

---

## 🔐 Security Practices

- ❌ No database credentials in source code  
- ✅ Environment variables for sensitive data  
- ✅ `.gitignore` protects secrets  
- ✅ MongoDB Atlas IP control  

---

## 📸 UI Design

- Dark, clean, professional UI  
- Inspired by modern developer tools (GitHub, Vercel, Linear)  
- Focused on readability and minimalism  

---

## 🧩 Future Enhancements

- ✏️ Edit & delete diary entries  
- 🔍 Search & filter by date  
- 🔐 Authentication (Login/Register)  
- 🌙 Light/Dark theme toggle  
- 📅 Calendar-based diary view  
- 📱 Progressive Web App (PWA)  

---

## 👨‍💻 Author

**Mohammed Musa**  
GitHub: https://github.com/mohammedmusa1  

---

## ⭐ Why This Project?

This project demonstrates:
- Real-world backend architecture  
- Secure cloud database integration  
- Clean UI/UX practices  
- Production-ready deployment workflow  

Perfect for:
- Portfolios  
- College projects  
- Interview discussions  
- Full-stack practice  

---

## 📜 License

This project is licensed under the **MIT License**.


