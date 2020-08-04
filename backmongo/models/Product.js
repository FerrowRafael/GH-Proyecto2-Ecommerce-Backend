const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;

const ProductSchema = new mongoose.Schema({
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
        type: Array,
        required: [true, 'El campo ruta de imagen es requerido']
    },
    stock: {
        type: Number,
        default: 0
    },
    popularity: {
        type: Number,
        default: 0
    },
    category:{
        type: String
    },
    orderIds: [{
        type: ObjectId,
        ref: 'Order'
    }],
    userId: {
        type: ObjectId,
        ref: 'User'
    },
}, {
    timestamps: true
});
const Product = mongoose.model('Product', ProductSchema);
module.exports = Product;