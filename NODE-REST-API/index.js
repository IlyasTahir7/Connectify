const express = require("express");
const app = express();
const morgan = require("morgan");
const dotenv = require("dotenv");
const helmet = require("helmet");
const mongoose = require("mongoose");
const userRoute = require("./routes/users");
const userAuth = require("./routes/auth");
const userPost = require("./routes/posts");
dotenv.config();

//middleware
app.use(morgan("common"));
app.use(express.json());
app.use(helmet());
app.use("/api/users", userRoute);
app.use("/api/auth", userAuth);
app.use("/api/post", userPost);
async function startServer() {
  try {
    await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");

    app.listen(8800, () => {
      console.log("Backend Server Started!");
    });
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}

startServer();
app.get("/", (req, res) => {
  res.send("Welcome to homepage");
});
