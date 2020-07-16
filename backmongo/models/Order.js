const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaTypes.ObjectId;
const OrderSchema = new mongoose.Schema({

    total: String,
    status: String,
    UserId: String,
    deliveryDate: Date,
    productIds: [{
        name: String,
        _id:{
            type: ObjectId,
            ref: 'Product',
        },
        unit: Number,
        subtotal: Number
    }]
}, {
    timestamps: true
});
const Order = mongoose.model('Order', OrderSchema);
module.exports = Order;