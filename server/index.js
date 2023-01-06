const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const todoRoute = require("./routes/todo");
const authRoute = require("./routes/auth");

dotenv.config();
const PORT = 8080;

// this would be in env
const MONGO_URL =
  "mongodb+srv://work_management_tool:sagar123@cluster0.cw5hvt0.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(
  MONGO_URL,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("MongoDB connected");
  }
);
app.use(express.json());
app.use("/api/todo", todoRoute);
app.use("/api/auth", authRoute);

app.listen(PORT, () => {
  console.log("Running on PORT : " + PORT);
});
