const express  = require('express');
const expressService  = require('./service');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

expressService(app);

function createHttpServer() {
  const httpServer =  app.listen(PORT, () => {
    console.log('server started at http://localhost:' + PORT);
  });

  return httpServer;
}

if (require.main === module) {
  createHttpServer();
}
mongoose.connect('mongodb+srv://university-root:root@cluster0.klt5y.mongodb.net/university-root?retryWrites=true&w=majority', { useNewUrlParser: true }, () => {

});

// export default createHttpServer;
module.exports = createHttpServer

// const express = require('express');
// const app = require('./app');

// const mongoose = require('mongoose');
// const cors = require('cors');
// const bodyParser = require('body-parser');

// require('dotenv/config');

// app.use(cors());
// app.use(bodyParser.json());
// const postRouter = require('./routes/Post');
// const autRouter = require('./routes/auth');

// app.use('/api/user', autRouter);
// app.use('/api/posts', postRouter);
// app.get('/', (req, res) => {
//     console.log("We are on home");
// } );

// //Edit User: university-root@admin  atlasAdmin@admin


// // Connet to DB
