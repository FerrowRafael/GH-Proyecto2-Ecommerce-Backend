const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: [true, 'El campo User Name es requerido']
    },
    firstName: String,
    lastName: String,
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    role: {
        type: String,
        enum: ['admin', 'user', 'seller']
    },
    tokens: [String],
    address: String,
    image_path: {
        type: String,
    },
    CityId: Number
}, {
    timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;