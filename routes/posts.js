const express = require('express');
const router = express.Router();
const Posts = require('../models/Posts');


router.get('/', (req, res) => {
    res.send('We are on posts! ( /posts )')
});

router.get('/specific', (req, res) => {
    res.send('This is one specific post, oooweee.')
});

router.post('/', (req, res) => {
    console.log(req.body);
});

module.exports = router;