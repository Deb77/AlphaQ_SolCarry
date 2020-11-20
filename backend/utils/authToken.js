const jwt = require('jsonwebtoken');

const maxAge = 3 * 24 * 60 * 60;

module.exports.createToken = (user) => {
    return jwt.sign({ user }, process.env.JWT_SECRET, {
        expiresIn: maxAge
    });
};
