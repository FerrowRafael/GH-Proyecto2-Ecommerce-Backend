const Order = require('../models/Order.js');

const OrderController = {

    // 1 GET ALL ORDERS
    getOrdersAll(req, res) {
        Order.find() //include equivalent
            .then(orders => res.send(orders))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // 2 ORDER BY ORDER ID 
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

    // 3 ADD ORDER
    async addOrder(req, res) {
        try {
            req.body.userId = req.user._id
            const order = await Order.create({
                ...req.body, 
                status: "pending",
                deliveryDate: new Date(),
                UserId: req.user._id})
                res.status(201).send(order)
                
            
        } catch (error) {
            console.error(error)
        }
    },

    // 4 UPDATE ORDER
    updateOrder(req, res) {
        req.body.userId = req.user._id
        Order.findByIdAndUpdate(req.params._id, req.body)
            .then(order => res.status(201).send({message:"Order has been Update", order}))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // 5 DELETE ORDER
    deleteOrder(req, res) {
        req.body.userId = req.user._id
        Order.findByIdAndDelete(req.params._id)
            .then(order => res.status(201).send({message: "Order has been delete"}))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // ORDER BY USER ID
    async getOrderByUserId(req, res) {
        try {
            const orders = await Order.find({"UserId": req.user})
            res.status(200).send(orders);
        } catch (err) {
            console.log(err);
        }
    },
}

module.exports = OrderController;