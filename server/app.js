const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3000;
const router = require('./routes');

app .use(cors())
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(router)
    .listen(port, () => console.log('listen port: ', port));