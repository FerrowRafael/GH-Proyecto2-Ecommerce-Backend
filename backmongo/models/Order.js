const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;
const OrderSchema = new mongoose.Schema({

    total: String,
    status: String,
    seller: String,
    UserId: String,
    deliveryDate: Date,
    products: [{
        productId:{
            type: ObjectId,
            ref: 'Product',
        },
        units: Number
    }]
}, {
    timestamps: true
});
const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;