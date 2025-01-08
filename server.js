const express = require("express");
const axios = require("axios");
const cors = require("cors"); // Import CORS middleware
const app = express();
const port = 3000;
// Configure CORS options
const corsOptions = {
  origin: [
    "http://localhost:8080",
    "http://192.168.0.192:8080",
    "https://d991-104-174-118-51.ngrok-free.app",
    "https://haileyandjason.com",
  ], // Add all allowed origins
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};
// Use CORS middleware with options
app.use(cors(corsOptions));
// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  if (req.headers["x-forwarded-proto"] !== "https") {
    return res.redirect(`https://${req.headers.host}${req.url}`);
  }
  next();
});

// Your Google Apps Script URL
const scriptUrl =
  "https://script.google.com/macros/s/AKfycbxTD-AWaQIMJATtK_OLe6szJUG5d35ZiG4AY53L1AdOUoEzQKsn0T5KD6gVtKMYRKXD0g/exec";
// Route to handle RSVP submission
app.post("/submit-rsvp", async (req, res) => {
  try {
    const { name, attending, diet, phone, email } = req.body;
    // Format data as URL-encoded form data
    const params = new URLSearchParams();
    params.append("name", name);
    params.append("attending", attending);
    params.append("diet", diet);
    params.append("phone", phone);
    params.append("email", email);
    // Send the data to Google Apps Script
    const response = await axios.post(scriptUrl, params.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (response.data.success) {
      res.json({
        success: true,
        message: response.data.message,
        googleResponse: response.data,
      });
    } else {
      throw new Error(response.data.message || "Google Apps Script error");
    }
  } catch (error) {
    console.error("Error submitting RSVP:", error.message);
    res.status(500).json({ success: false, message: "Error submitting RSVP" });
  }
});

// app.options("/submit-rsvp", (req, res) => {
//   res.set({
//     "Access-Control-Allow-Origin": "*", // Adjust to match your origin(s)
//     "Access-Control-Allow-Methods": "POST, OPTIONS",
//     "Access-Control-Allow-Headers": "Content-Type",
//   });
//   res.sendStatus(200);
// });
// Start the server

app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}`);
});
