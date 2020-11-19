const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const emailValidate = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email);
}

const driverSchema = Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
    },
    email: {
        type: String,
        required: [true, 'Please enter your email'],
        lowercase: true,
        unique: true,
        validate: [emailValidate, 'Please enter a valid email'],
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length should be 6 characters'],
    },
    lat: { type: String },
    long: { type: String },
    available: { type: Boolean, default: false },
    time: { type: Date, default: Date.now()}
},
    { timestamps: true }
);

driverSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

driverSchema.statics.login = async function (email, password) {
    const user = await this.findOne({ email });
    if (user) {
        const auth = await bcrypt.compare(password, user.password);
        if (auth) {
            return user;
        }
        throw Error('incorrect password');
    }
    throw Error('incorrect email');
}


const Driver = mongoose.model('driver', driverSchema);

module.exports = Driver;