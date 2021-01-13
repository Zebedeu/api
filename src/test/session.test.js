const createHttpServer  = require('../server');
const agent = require('supertest');
const  omit  = require('lodash');

const httpServer = createHttpServer();
const request = agent(httpServer);

afterAll(done => {
  httpServer.close(done);
});

// const User  = require('../../src/app/models/User');

describe('Authentication', () => {
    it('register', async() => {
        // const { body, status } = await global.testRequest.post('/api/user/register');
        const response = request
        .post('/api/user/register')
        .send({
            name: 'Marcio Zebedeu',
            email: 'b898@marciozebedeu.com',
            password: '1234e'
        });
        console.log(response);
        response.header = omit(response.header, ["date"]);
        expect(response).toMatchSnapshot();
    
    });
    
    it('Soudld if user is auth', async() => {
        const response = request
        .post('/api/user/login')
        .send({
            email: 'bb@marciozebedeu.com',
            password: '1234e'
        });
        // expect(response).toEqual(200);
    });
});