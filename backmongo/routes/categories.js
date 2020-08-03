const router = require('express').Router();
const CategoryController = require('../controllers/CategoryController');
// const { authentication, is } = require('../middleware/authentication');

router.get('/all', CategoryController.getCategoriesAll);             // 1 GET ALL CATEGORIES
router.post('/add',  CategoryController.addCategory);                 // 2 ADD CATEGORY

module.exports = router