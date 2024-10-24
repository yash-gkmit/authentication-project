const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();

async function dbConnection() {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1); 
  }
}

module.exports = dbConnection;
