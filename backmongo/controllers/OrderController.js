const OrderModel = require('../models/Order.js');

const OrderController = {

    // GET ALL ORDERS
    getOrdersAll(req, res) {
        Order.find() //include equivalent
            .then(orders => res.send(orders))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // ORDER BY ORDER ID **
    getOrderById(req, res) {
        Order.findById(req.params._id)
            .populate('productId')
            .populate('userId')
            .then(order => res.send(order))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

}

module.exports = OrderController;