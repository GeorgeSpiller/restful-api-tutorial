const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

const postsRoute = require('./routes/posts');

// Import Routes
app.use('/posts', postsRoute);

// Home Route
app.get('/', (req, res) => {
    res.send('We are on  home! ( / )')
});


// CONNECT TO DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    () => console.log("Connected to DB."));

// Start listening to the server
app.listen(3000);


