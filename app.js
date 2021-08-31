const express = require('express');

const app = express();

// MIDDLEWARES
// app.use('/posts', () => {
//     console.log("Middleware for posts has run!")
// });


// ROUTES
app.get('/', (req, res) => {
    res.send('We are on  home! ( / )')
});

app.get('/posts', (req, res) => {
    res.send('We are on posts! ( /posts )')
});

// Start listening to the server
app.listen(3000);


