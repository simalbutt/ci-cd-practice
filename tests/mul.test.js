// tests/multiply.test.js
const request = require('supertest');
const app = require('../index');
const nock = require('nock');
const { fetchData } = require('../lib/external');

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

test('fetchData returns data from API', async () => {
  nock('https://api.example.com').get('/').reply(200, { hello: 'world' });
  const data = await fetchData('https://api.example.com/');
  expect(data).toEqual({ hello: 'world' });
  nock.cleanAll();
});

});



