const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');


// MIDDLEWARES

// ROUTES
app.get('/', (req, res) => {
    res.send('We are on  home! ( / )')
});

app.get('/posts', (req, res) => {
    res.send('We are on posts! ( /posts )')
});

// CONNECT TO DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    () => console.log("Connected to DB."));

// Start listening to the server
app.listen(3000);


