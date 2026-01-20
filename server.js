require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const Diary = require("./models/diary");

const app = express();

/* ===============================
   DATABASE (MongoDB Atlas)
================================ */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("✅ MongoDB Atlas Connected"))
  .catch(err => {
    console.error("❌ MongoDB Connection Error");
    console.error(err);
  });

/* ===============================
   MIDDLEWARE
================================ */
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

/* ===============================
   ROUTES
================================ */
app.get("/", async (req, res) => {
  try {
    const diaries = await Diary.find().sort({ createdAt: -1 });
    res.render("home", { diaries });
  } catch (err) {
    console.error(err);
    res.render("home", { diaries: [] });
  }
});

app.get("/add", (req, res) => {
  res.render("add");
});

app.post("/add", async (req, res) => {
  const { title, content } = req.body;
  await Diary.create({ title, content });
  res.redirect("/");
});

/* ===============================
   SERVER
================================ */
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`🚀 Diary app running on port ${PORT}`);
});
