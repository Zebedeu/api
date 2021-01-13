//import { Server } from '@overnightjs/core';
// const cors = require('cors');
// const bodyParser = require('body-parser');
// require('dotenv/config');

const express = require('express');
const app = express();
app.listen(3000, () => console.log("Server Up ad running"));

// export class AppController extends Server {
//     constructor( port = 3000) {
//         super();
//       }
//        init() {
    
//         this.middleware();
//         this.routes();
        
//     }
//     middleware() {
//         this.app.use(cors());
//         this.app.use(bodyParser.json());
    
//     }

//     routes() {
//         const postRouter = require('./routes/Post');
//         const userRouter = require('./routes/auth');
//         this.addControllers([postRouter, userRouter]);
//     }
//      getApp() {
//         return this.app;
//       }
// }

// module.exports = new AppController().express;

module.exports = app
