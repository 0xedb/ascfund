import express = require('express');
import cors = require('cors');
import {sendmail} from './util';
import bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const PORT = process.env.FUNDUS_PORT || 9040;

app.get('/', (req, res) => {
  res.send('working').end();
});

app.post('/fundasc', (req, res) => {
  console.log(req.body);
  sendmail(req.body.email);
  res.status(200).end();
});

app.post('/fundasc/code', (req, res) => {
  console.log(req.body);
  res.status(200).end();
});

app
  .listen(PORT, () => console.log(`Running on http://localhost:${PORT}`))
  .on('error', err => console.log(err));