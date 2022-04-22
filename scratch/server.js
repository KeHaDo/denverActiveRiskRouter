const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
//const { route, closest, distance, topology } = require('./src/pgRouting.js');
const { exp_config } = require('./src/config');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.get('/api', (req, res) => {
  res.send('Welcome to PG Routing API Written in Node JS Express!');
});

app.listen(exp_config.port, () => console.log(`app listening on port ${exp_config.port}!`));