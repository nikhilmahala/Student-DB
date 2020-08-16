const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const saltRounds = 10;

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true,
        lowercase: true,
        validate: value => {
            if(!validator.isEmail(value)) {
                throw new Error({error: 'Invalid Email Address'});
            }
        }
    },
    password: {
        type: String,
        trim: true,
        required: true,
        minlength: 8 
    }
});

userSchema.pre('save', function(next){
    this.password = bcrypt.hashSync(this.password, saltRounds)
    next()
});

module.exports = mongoose.model('User', userSchema);