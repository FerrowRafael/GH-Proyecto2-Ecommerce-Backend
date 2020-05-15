const router = require('express').Router();
const OrderController = require('../controllers/OrderController');
const { authentication, is } = require('../middleware/authentication');

router.get('/all', OrderController.getOrdersAll); // 1 GET ALL ORDERS
router.get('/:_id', OrderController.getOrderById); // 2 ORDER BY ORDER ID

router.post('/add', authentication, is(['admin', 'user']), OrderController.addOrder); // 4 INSERT ORDER
router.put('/update/id=:_id', authentication, is(['admin']), OrderController.updateOrder); // 5 UPDATE ORDER
router.delete('/delete/id=:_id', authentication, is(['admin']), OrderController.deleteOrder); // 6 DELETE ORDER

module.exports = router