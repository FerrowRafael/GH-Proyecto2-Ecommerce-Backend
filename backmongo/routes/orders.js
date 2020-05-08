const router = require('express').Router();
const OrderController = require('../controllers/OrderController');
const { authentication, is } = require('../middleware/authentication');

router.get('/', OrderController.getOrdersAll); // GET ALL ORDERS
router.get('/:_id', OrderController.getOrderById); // ORDER BY ORDER ID
router.get('/:name', OrderController.getOrderByName); // ORDER BY ORDER NAME
router.post('/', authentication, is(['seller']), OrderController.insert); // INSERT ORDER