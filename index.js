const express = require('express');
const { dbConnection } = require('./database/config');
const cors = require('cors');
require('dotenv').config();
// Create server

const app = express();

// Database
dbConnection();

// Enable cors
app.use(cors());

// Public directory
app.use(express.static('public'));

//Read and Parse of Body
app.use(express.json());


// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));


// Listen request

app.listen(process.env.PORT, () => {
  console.log(`Server on port ${process.env.PORT}`)
})