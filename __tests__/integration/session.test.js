const request = require('supertest');
// const app = require('../../src/app');
const User  = require('../../src/app/models/User');
const express = require('express');
const app = express();

describe('Authentication', () => {
    it('register user', async() => {
        const user =  await new User({
            name: "Marcio Zebedeu",
            email: "bb@marciozebedeu.com",
            password: "1234e"
        });

        const response = await request(app)
        .post('/api/user/login')
        .send({
            email: 'bb@marciozebedeu.com',
            password: '1234e'
        });
        expect(response.status).toBe(200);
    });

});