const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json());
const postRouter = require('./routes/Post');
const autRouter = require('./routes/auth');

app.use('/api/user', autRouter);
app.use('/posts', postRouter);
app.get('/', (req, res) => {
    console.log("We are on home");
} );

//Edit User: university-root@admin  atlasAdmin@admin


// Connet to DB
 mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
     console.log("connectado ao BD");
 });
app.listen(3000, () => console.log("Server Up ad running"));