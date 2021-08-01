const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const imageRoute = require("./routes/image");

require("dotenv").config();

// DB connection
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    });
    console.log("Connected to MongoDB");
  } catch (err) {
    console.log("Failed to connect to MongoDB", err);
  }
};

connectDB();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));
app.use(cors());

app.get("/", (req, res) => {
  return res.status(200).send("Api is working");
});

app.use("/api/image", imageRoute);

module.exports = app;
