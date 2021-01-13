import { AppController } from './src/app';
import supertest from 'supertest';

beforeAll(() => {
  const server = new AppController();
  server.init();
  global.testRequest = supertest(server.getApp());
});
