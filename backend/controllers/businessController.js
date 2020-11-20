const Business = require('../models/Business');
const authToken = require('../utils/authToken');

const handleErrors = (err) => {
    let errors = { name: '', email: '', password: '', type: '', lat: '', long: '' };

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

    if (err.message.includes('business validation failed')) {
        
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }  
    return errors;
}

module.exports.find_all_get = async (req, res) => {
    try {
        const business = await Business.find();
        res.status(201).json( business )
    }
    catch(err){
        res.status(400).json("You don't have any items registered/There is connection problem");
    }
}


module.exports.signup_post = async(req, res) => {
    try {
        const business = await Business.create(req.body);
        const token = authToken.createToken(business);
        res.status(201).json({ token: token, user:business._id });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors: errors });
    }
};

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const business = await Business.login(email, password);
        const token = authToken.createToken( business );
        console.log(token);
        res.status(201).json({ token: token, user:business._id });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors: errors });
    }
};

module.exports.filter_get = async (req, res) => {
    try {
        const businesses = await Business.find(req.body);
        res.status(201).json( businesses )
    }
    catch(err){
        res.status(400).json("You don't have any items registered/There is connection problem");
    }
}