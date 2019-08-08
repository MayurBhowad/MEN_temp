const express = require('express');
const mongoose = require('mongoose');

const app = express();

//MIDDLEWARE


//ROUTES
app.get('/', (req, res) => {
    res.send('app.js..app.get')
});

app.get('/posts', (req, res) => {
    res.send('app.js..app.get../posts');
});

//DB connection
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true }, () => console.log('DB Connected..'));

app.listen(3000);