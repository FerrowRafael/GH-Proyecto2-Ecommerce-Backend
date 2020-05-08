const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'El campo nombre es requerido']
    },
    description: {
        type: String,
        required: [true, 'El campo descripción es requerido']
    },
    price: {
        type: Number,
        required: [true, 'El campo precio es requerido']
    },
    image_path: {
        type: String,
        required: [true, 'El campo ruta de imagen es requerido']
    },
    stock: {
        type: Number,
        required: [true, 'El campo stock es requerido']
    },
    popularity: {
        type: Number,
        required: [true, 'El campo popularity es requerido']
    },
    orderIds: [{
        type: ObjectId,
        ref: 'Order'
    }],
    userId: {
        type: ObjectId,
        ref: 'User'
    }
}, {
    timestamps: true
});
const Product = mongoose.model('Product', productSchema);
module.exports = Product;