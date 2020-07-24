const router = require('express').Router();
const OrderController = require('../controllers/OrderController');
const { authentication, is } = require('../middleware/authentication');

router.get('/all', OrderController.getOrdersAll);                                                       // 1 GET ALL ORDERS
router.get('/id/:_id', OrderController.getOrderById);                                                   // 2 ORDER BY ORDER ID
router.post('/add', authentication, is(['admin', 'seller']), OrderController.addOrder);                 // 3 ADD ORDER
router.put('/update/id/:_id', authentication, is(['admin', 'seller']), OrderController.updateOrder);    // 4 UPDATE ORDER
router.delete('/delete/id/:_id', authentication, is(['admin', 'seller']), OrderController.deleteOrder); // 5 DELETE ORDER

router.get('/user', authentication, OrderController.getOrderByUserId);                                             // 6 ORDER BY USER ID

module.exports = router