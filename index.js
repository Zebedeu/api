const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');

app.use(bodyParser.json());
const autRouter = require('./routes/Post');
app.use('/posts', autRouter);
app.get('/', (req, res) => {
    console.log("We are on home");
} );

//Edit User: university-root@admin  atlasAdmin@admin


// Connet to DB
 mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () => {
     console.log("connectado ao BD");
 });
app.listen(3000, () => console.log("Server Up ad running"));