const express = require('express');
const app = express();
const path = require("path");

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config({ path: 'backend/config/config.env' })
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const data = require('./routes/data');
app.use('/api/v1', data);

app.use(express.static(path.join(__dirname, './build')));


module.exports = app;