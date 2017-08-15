const express = require('express');

const app = express();

app.set('port', (process.env.API_PORT || 3001));