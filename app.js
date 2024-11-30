const express = require('express');
const dotenv = require('dotenv');
const dbConnection = require('./config/database.js');

dotenv.config();

const app = express();
app.use(express.json());

dbConnection();

const PORT = process.env.PORT||4700;
app.listen(PORT, () => {
  console.log(`server listening on port : ${PORT}`)
})