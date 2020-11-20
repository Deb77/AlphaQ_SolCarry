const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const colors = require('colors');

const customerRoutes = require('./routes/customerRoutes');
const businessRoutes = require('./routes/businessRoutes');
const driverRoutes = require('./routes/driverRoutes');
const itemRoutes = require('./routes/itemRoutes');
const orderRoutes = require('./routes/orderRoutes');

const app = express();
require('dotenv').config();   

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3008;
const uri = process.env.ATLAS_URI;

mongoose.connect(uri, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false 
});

app.use('/customer', customerRoutes);
app.use('/business', businessRoutes);
app.use('/driver', driverRoutes);
app.use('/item', itemRoutes);
app.use('/order', orderRoutes);

app.listen(port, () =>
    console.log(colors.bold.cyan(`Server running on port ${port}`))
);