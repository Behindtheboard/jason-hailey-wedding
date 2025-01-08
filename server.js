const express = require("express");
const axios = require("axios");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 3000;

// Configure CORS options
const corsOptions = {
  origin: ["https://haileyandjason.com"], // Update with your actual allowed origin(s)
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
};

// Use CORS middleware with options
app.use(cors(corsOptions));

// Middleware for parsing JSON and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

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

    // Log the response for debugging
    console.log("Google Apps Script response:", response.data);

    // Return the success message
    res.json({
      success: true,
      message: response.data.message || "RSVP submitted successfully!",
      googleResponse: response.data,
    });
  } catch (error) {
    console.error("Error submitting RSVP:", error.message);

    // Log error details for debugging
    if (error.response) {
      console.error(
        "Error response from Google Apps Script:",
        error.response.data
      );
    }

    res.status(500).json({ success: false, message: "Error submitting RSVP" });
  }
});

// Start the server
app.listen(port, "0.0.0.0", () => {
  console.log(`Server running at http://localhost:${port}`);
});
