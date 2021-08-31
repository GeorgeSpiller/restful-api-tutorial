const mongoose = require('mongoose');

// Create schema
const PostsSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    desc: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now()
    } 
});

module.exports = mongoose.model('Posts', PostsSchema);