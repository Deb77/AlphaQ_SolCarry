const Driver = require('../models/Driver');
const authToken = require('../utils/authToken');
const axios = require('axios');

const handleErrors = (err) => {
    let errors = { name: '', email: '', password: '' };

    if (err.message === 'incorrect email') {
        errors.email = 'This email is not registered';
    }

    if (err.message === 'incorrect password') {
        errors.password = 'This password is incorrect';
    }

    if (err.code === 11000) {
        errors.email = 'This email is already registered';
        return errors;
    }

    if (err.message.includes('driver validation failed')) {
        
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }  
    return errors;
}

module.exports.signup_post = async(req, res) => {
    try {
        const driver = await Driver.create(req.body);
        const token = authToken.createToken(driver);
        res.status(201).json({ token: token, user: { id: driver._id, updatedAt: driver.updatedAt } });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors: errors });
    }
};

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const driver = await Driver.login(email, password);
        const token = authToken.createToken( driver );
        console.log(token);
        res.status(201).json({ token: token, user:driver._id });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors: errors });
    }
};

module.exports.stats_update = async (req, res) => {
    try {
        await Driver.findByIdAndUpdate(req.params.id, req.body);
        res.status(201).json("The driver's information has been updated successfully");
    }
    catch (err) {
        res.status(400).json("We were unable to update");
    }
};

module.exports.closest_get = async (req, res) => { 
    try {
        const curlat = req.body.lat;
        const curlong = req.body.long;

        const drivers = await Driver.find({ available: true });
        const locations = new Array(drivers.length);
        let promises = [];
        
    for (i = 0; i < drivers.length; i++){
        const { lat, long } = drivers[i];
        promises.push(
            axios.post(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${lat},${long}&destinations=${curlat},${curlong}&key=AIzaSyAX5oDs8RabZB7o1H1OJvPkENC3ugJhsZU`)
                .then(({data}) => locations[i] = parseInt(data.rows[0].elements[0].distance.text.split(" ")[0]))
        );
    }
        const distance = await Promise.all(promises);
        let driver = '';

        for (i = 0; i < distance.length -1 ; i++){
            if (distance[i] > distance[i + 1]) {
                driver = drivers[i + 1];
            }
        }
        res.status(200).json({ driver: driver})
    }
    catch (err) {
        res.status(400).json("Driver not found");
    }
}
