// tests/external.test.js
const nock = require('nock');
const { fetchData } = require('../lib/external');

test('fetchData returns data from API', async () => {
  nock('https://api.example.com').get('/').reply(200, { hello: 'world' });
  const data = await fetchData('https://api.example.com/');
  expect(data).toEqual({ hello: 'world' });
  nock.cleanAll();
});
