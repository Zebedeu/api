const request = require('supertest');
const app = require('../../src/app');
const User  = require('../../src/app/models/User');

describe('Authentication', () => {
    it('register user', async() => {
        const user =  await new User({
            name: "Marcio Zebedeu",
            email: "contacto@marciozebedeu.com",
            password: "1234e"
        });

        const response = await request(app)
        .post('/login')
        .send({
            email: user.email,
            password: '1234e'
        })
        console.log(user);
        expect(response.status).toBe(200);
    });

});