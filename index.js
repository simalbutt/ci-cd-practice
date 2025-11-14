// index.js
const express = require('express');
const app = express();
app.use(express.json()); //This adds middleware to the application. Specifically, it tells Express to automatically parse incoming request bodies with a JSON payload. If a client sends a JSON object in a POST/PUT request, this middleware makes that data available in req.body.

app.get('/health', (req, res) => res.json({ status: 'ok' }));

app.get('/sum', (req, res) => {
  const a = Number(req.query.a || 0);
  const b = Number(req.query.b || 0);
  res.json({ result: a + b });
});
app.get('/multiply', (req, res) => {
  const a = Number(req.query.a || 0);
  const b = Number(req.query.b || 0);
  res.json({ result: a * b });
});

module.exports = app;



