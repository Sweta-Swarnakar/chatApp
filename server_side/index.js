const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");

const app = express();
dotenv.config();

const MONGO_URI = process.env.MONGO_URI; // Fix the typo here from MOGNO_URI to MONGO_URI
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("API is running");
});

const connectDB = async () => { // Rename the function to avoid conflict
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log("MongoDB connected");
  } catch (error) {
    console.error(error.message);
    process.exit(1); // Exit process with failure
  }
};

app.listen(PORT, async () => { // Remove the parameter from the callback
  await connectDB(); // Call the function here
  console.log(`Server running on port ${PORT}`);
});
