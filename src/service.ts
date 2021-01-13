import { Application } from 'express-serve-static-core';
import express, { Router } from 'express';
import cors from 'cors';

function  expressService(app: Application) {
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

//   const api = Router();

//   api.get('/health', (req, res) => {
//     res.sendStatus(200);
//   });

  const postRouter = require('./routes/Post');
const autRouter = require('./routes/auth');

app.use('/api/user', autRouter);
app.use('/api/posts', postRouter);
app.get('/', (req, res) => {
    console.log("We are on home");
} );

//   app.use(api);
};

module.exports = expressService;