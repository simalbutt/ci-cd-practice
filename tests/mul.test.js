// tests/multiply.test.js
const request = require('supertest');
const app = require('../index');

describe('API Tests', () => {
  test('GET /health', async () => {
    const res = await request(app).get('/health');
    expect(res.status).toBe(200);
    expect(res.body.status).toBe('ok');
  });

  test('GET /sum?a=2&b=3', async () => {
    const res = await request(app).get('/sum?a=2&b=3');
    expect(res.status).toBe(200);
    expect(res.body.result).toBe(5);
  });
  test('multiply endpoint returns product of a and b', async () => {
  const res = await request(app).get('/multiply?a=3&b=4');
  expect(res.status).toBe(200);
  expect(res.body.result).toBe(12);
});
});



