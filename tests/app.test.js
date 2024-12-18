const request = require('supertest');
const app = require('../app.js');

describe('The Express Server', () => {
  beforeAll(done => {
    done(); // beforeAll hook, executed before all tests
  });

  test('should return response from root endpoint', async () => {
    const res = await request(app)
      .get('/');  // Make a GET request to the root ("/") endpoint
    expect(res.statusCode).toEqual(200);  // Expect status code to be 200 (OK)
  });

  test('should respond at /products', async () => {
    const res = await request(app)
      .get('/products');  // Make a GET request to the /products endpoint
    expect(res.statusCode).toEqual(200);  // Expect status code to be 200 (OK)
  });

  // You can add more tests for additional endpoints here
});
