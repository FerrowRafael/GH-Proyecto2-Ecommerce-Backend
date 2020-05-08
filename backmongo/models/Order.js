const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;
const orderSchema = new mongoose.Schema({

    total: String,
    status: String,
    seller: String,
    store: String,
    UserId: String,
    deliveryDate: Date,
    products: [{
        type: ObjectId,
        ref: 'Product'
    }]
}, {
    timestamps: true
});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;