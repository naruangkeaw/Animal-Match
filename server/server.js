const express = require('express');
const app = express();
require('dotenv').config();

const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const xss = require('xss-clean');
const mongoSanitize = require('express-mongo-sanitize');

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`
mongoose.connect(mongoUri);

// PARSING
app.use(bodyParser.json())


// SANITIZE
app.use(xss());
app.use(mongoSanitize());


const port = process.env.PORT || 3341;
app.listen(port, () => {
    console.log(`Server runnig on port ${port}`);
});