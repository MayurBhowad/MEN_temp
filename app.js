const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

require('dotenv/config');

const app = express();
app.use(cors());
app.use(bodyParser.json());

//IMPORT ROUTES
const postRoute = require('./routes/posts');

//MIDDLEWARE
app.use('/posts', postRoute);


//ROUTES
app.get('/', (req, res) => {
    res.send('app.js..app.get')
});



//DB connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => console.log('DB Connected..'));

app.listen(3000);