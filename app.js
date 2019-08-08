const express = require('express');
const mongoose = require('mongoose');

require('dotenv/config');

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
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('DB Connected..'));

app.listen(3000);