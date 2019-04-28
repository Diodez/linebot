const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
  
app.post('/webhook', async (req, res) => {
  res.sendStatus(200);
});

app.listen(4000);