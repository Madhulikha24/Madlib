require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const cors = require("cors");
const path = require("path");

const keys = require("./config/keys"); // Import correct env keys
const app = express();

// MongoDB Connection with Proper Error Handling
mongoose.connect(keys.mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log("✅ MongoDB Connected"))
.catch((err) => {
  console.error("❌ MongoDB Connection Error:", err.message);
  process.exit(1); // Prevents silent failures
});

// Middleware Setup
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Passport Middleware
app.use(passport.initialize());
require("./config/passport")(passport);

// API Routes
app.use("/api/users", require("./routes/api/users"));
app.use("/api/madlibs", require("./routes/api/madlibs"));

// Production Setup
if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}

// Default Route
app.get("/", (req, res) => res.send("React Broke!"));

// Start Server (Fixed duplicate `app.listen`)
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));