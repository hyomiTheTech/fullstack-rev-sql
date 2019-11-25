// Express Server
// FIX ME :(
const express = require('express');
const path = require('path');
const router = require('./router');
const port = 3000;
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router)
app.use('/', express.static(path.join(__dirname, '/../client/dist/')));



app.listen(port, () => console.log('Connected to port: 3000'))
