// install dependencies
const { execSync } = require('child_process');
const { describe, it, expect, beforeAll, afterEach } = require("@jest/globals");
execSync('npm install');
execSync('npm run seed');

const request = require("supertest")
const { db } = require('./db/db');
const app = require('./app');
const seedData = require('./db/seed')

describe('GET test', () => {
    it('should get 200 response', async () => {
        const response = await request(app).get('/items');
        expect(response.status).toBe(200);
    })

    it('should get all items', async () => {
        const response = await request(app).get('/items');
        const responseData = response.body;
        expect(Array.isArray(responseData)).toBe(true);
    


    // the expect statement below expects an array of only objects and will check all of them
    expect(responseData).toEqual(
      responseData.map(() =>
        expect.objectContaining({
          name: expect.any(String),
          description: expect.any(String),
          price: expect.any(Number),
          category: expect.any(String),
          image: expect.any(String),
        })
      )
    );
})
});




