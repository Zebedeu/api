
const express = require('express');

const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv/config');

class AppController {
    constructor (){
        this.express = express();
        
    }
    middleware() {
        this.express.use(cors());
        this.express.use(bodyParser.json());
    }

    routes() {
        this.express.use(require('./routes/Post'));
        this.express.use(require('./routes/auth'));

    }
}

// app.use('/api/user', autRouter);
// app.use('/api/posts', postRouter);
// app.get('/', (req, res) => {
//     console.log("We are on home");
// } );

//Edit User: university-root@admin  atlasAdmin@admin

module.exports = new AppController().express;

