const Order = require('../models/Order.js');

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

    // INSERT ORDER
    async addOrder(req, res) {
        try {
            req.body.userId = req.user._id
            const order =Order.create(req.body)
                res.status(201).send(order)
                
            
        } catch (error) {
            console.error(error)
        }
    },

    // UPDATE ORDER **Revisar .send(order)
    updateOrder(req, res) {
        req.body.userId = req.user._id
        Order.findByIdAndUpdate(req.params._id, req.body)
            .then(order => res.status(201).send({message:"Order has been Update", order}))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // DELETE ORDER
    deleteOrder(req, res) {
        req.body.userId = req.user._id
        Order.findByIdAndDelete(req.params._id)
            .then(order => res.status(201).send({message: "Order has been delete"}))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },
}

module.exports = OrderController;