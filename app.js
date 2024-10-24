const express = require('express');
const dotenv = require('dotenv');
const dbConnection = require('./config/database.js');
const authRoutes = require('./routes/auth.route.js');

dotenv.config();

const app = express();
app.use(express.json());

dbConnection();

app.use('/api/users', authRoutes)
const PORT = process.env.PORT||4700;
app.listen(PORT, () => {
  console.log(`server listening on port : ${PORT}`)
})