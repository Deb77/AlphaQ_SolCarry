const Customer = require('../models/Customer');
const authToken = require('../utils/authToken');

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

    if (err.message.includes('customer validation failed')) {
        
        Object.values(err.errors).forEach(({ properties }) => {
            errors[properties.path] = properties.message;
        });
    }  
    return errors;
}

module.exports.signup_post = async(req, res) => {
    try {
        const customer = await Customer.create(req.body);
        const token = authToken.createToken(customer);
        res.status(201).json({ token: token, user:customer._id });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors: errors });
    }
};

module.exports.login_post = async (req, res) => {
    const { email, password } = req.body;
    try {
        const customer = await Customer.login(email, password);
        const token = authToken.createToken( customer );
        console.log(token);
        res.status(201).json({ token: token, user:customer._id });
    }
    catch (err) {
        const errors = handleErrors(err);
        res.status(400).json({ errors: errors });
    }
};