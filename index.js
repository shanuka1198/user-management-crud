const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

dotenv.config();
const app = express();
app.use(bodyParser.json());
const connectionString = process.env.MONGO_URL;
const userRoutes = require("./routes/userRoutes");

mongoose
  .connect(connectionString)
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((error) => {
    console.error("MongoDB connection error:", error);
  });

app.use("/api/users", userRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server is running on port 5000");
});
