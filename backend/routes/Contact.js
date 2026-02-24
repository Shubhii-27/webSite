// backend/routes/contact.js
const express = require("express");
const router = express.Router();
const Contact = require("../models/Contact"); // correct path

// Submit contact
router.post("/", async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: "Please fill all fields" });
  }

  try {
    const contact = new Contact({ name, email, message });
    await contact.save();
    res.status(201).json({ message: "Contact submitted successfully" });
  } catch (err) {
    console.error("Contact Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

// Get all contacts
router.get("/", async (req, res) => {
  try {
    const contacts = await Contact.find().sort({ createdAt: -1 });
    res.json(contacts);
  } catch (err) {
    console.error("Get Contacts Error:", err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
});

module.exports = router;