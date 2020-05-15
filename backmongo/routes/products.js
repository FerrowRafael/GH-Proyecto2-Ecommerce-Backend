const router = require('express').Router();
const ProductController = require('../controllers/ProductController');
const { authentication, is } = require('../middleware/authentication');

router.get('/all', ProductController.getProductsAll); // GET ALL PRODUCTS 1
router.get('/search/id=:_id', ProductController.getProductById); // PRODUCT BY PRODUCT ID 2
router.get('/search/name=:name', ProductController.getProductByName); // PRODUCT BY PRODUCT NAME 3 **
router.post('/add', authentication, is(['seller', 'admin']), ProductController.addProduct); // ADD PRODUCT 4
router.put('/update/id=:_id', authentication, is(['admin']), ProductController.updateProduct); // UPDATE PRODUCT 5
router.delete('/delete/id=:_id', authentication, is(['admin']), ProductController.deleteProduct); // DELETE PRODUCT 6

router.get('/best', ProductController.getProductsBest); // GET PRODUCTS BEST (productos mas vendidos) 7
router.get('/recent', ProductController.getProductsRecent); // GET PRODUCTS RECENT (productos mas recientes) 8
router.get('/suggested', ProductController.getProductsSuggested); // GET PRODUCTS SUGGESTED (productos sugeridos) 9
router.get('/category', ProductController.getProductsCategory); // GET PRODUCTS BY CATEGORY (productos por categoria) 10

router.get('/searchMa/input=:input', ProductController.ProductsSearchMay); // SEARCH PRODUCTS BY NAME/CATEGORY/DESCRIPTION + -
router.get('/searchMe/input=:input', ProductController.ProductsSearchMen); // SEARCH PRODUCTS BY NAME/CATEGORY/DESCRIPTION - +

router.get('/searchMayor', ProductController.ProductsMayor);
router.get('/searchMenor', ProductController.ProductsMenor);

module.exports = router