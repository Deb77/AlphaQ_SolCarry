const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const emailValidate = (email) => {
    const re = /\S+@\S+\.\S+/
    return re.test(email);
}

const businessSchema = Schema({
    name: {
        type: String,
        required: [true, 'Please enter your name'],
    },
    description: {
        type: String,
        required: [true, "Please enter item's description"],
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
    lat: {
        type: String,
        required: [true, 'Please select a location'],
    },
    long: {
        type: String,
        required: [true, 'Please select a location'],
    },
    type: {
        type: String,
        required: [true, 'Please select the type of your business'],
    },
    image: {
        type: String,
        required: [true, 'Please add an image of your business']
    }
},
    { timestamps: true }
);

businessSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

businessSchema.statics.login = async function (email, password) {
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


const Business = mongoose.model('business', businessSchema);

module.exports = Business;