const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const colors = require('colors');

const app = express();
require('dotenv').config();   

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3002;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
});

app.listen(port, () => console.log(colors.bold.cyan(`Server running on port ${port}`)));