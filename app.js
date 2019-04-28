const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', async (req, res) => {
    res.send({
        test: "test"
    });
});
  
app.post('/webhook', async (req, res) => {
  res.sendStatus(200);
});

app.listen(4000, () => {
    console.log('start service 4000');
});