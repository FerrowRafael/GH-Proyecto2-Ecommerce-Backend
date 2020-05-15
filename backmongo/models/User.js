const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
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
    timestamps: true,
    toJSON: {
        transform: (doc, ret) => {
            delete ret.tokens;
            delete ret.password;
            return ret;
        }
    }
});

const User = mongoose.model('User', UserSchema);
module.exports = User;