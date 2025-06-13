require("dotenv").config(); // Ensure dotenv loads first

module.exports = {
  mongoURI: process.env.MONGO_URI,
  secretOrKey: process.env.SECRET_OR_KEY
};