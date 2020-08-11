const router = require('express').Router();
const ProductController = require('../controllers/ProductController');
const { authentication, is } = require('../middleware/authentication');
const { uploadUserProfileImages } = require('../middleware/multer')

router.get('/all', ProductController.getProductsAll);                                       // 1 GET ALL PRODUCTS 
router.get('/search/id/:_id', ProductController.getProductById);                            // 2 PRODUCT BY PRODUCT ID 
router.get('/search/name/:name', ProductController.getProductByName);                       // 3 PRODUCT BY PRODUCT NAME  **
router.post('/add', authentication, is(['seller', 'admin']), uploadUserProfileImages.single('avatar'), ProductController.addProduct); // 4 ADD PRODUCT 
router.put('/update/id/:_id', authentication, is(['seller', 'admin']), ProductController.updateProduct); // 5 UPDATE PRODUCT 
router.get('/delete/id/:_id', authentication, is(['admin','seller']), ProductController.deleteProduct); // 6 DELETE PRODUCT 

router.get('/best', ProductController.getProductsBest);                                     // 7 GET PRODUCTS BEST (productos mas vendidos) 
router.get('/recent', ProductController.getProductsRecent);                                 // 8 GET PRODUCTS RECENT (productos mas recientes) 
router.get('/suggested', ProductController.getProductsSuggested);                           // 9 GET PRODUCTS SUGGESTED (productos sugeridos) ***
router.get('/category', ProductController.getProductsCategory);                             // 10 GET PRODUCTS BY CATEGORY (productos por categoria) *** 

router.get('/searchMa/input/:input', ProductController.ProductsSearchMay);                  // SEARCH PRODUCTS BY NAME/CATEGORY/DESCRIPTION + -
router.get('/searchMe/input/:input', ProductController.ProductsSearchMen);                  // SEARCH PRODUCTS BY NAME/CATEGORY/DESCRIPTION - +

router.get('/searchMayor', ProductController.ProductsMayor);
router.get('/searchMenor', ProductController.ProductsMenor);

router.get('/sellerAll/:userId', ProductController.getProductBySeller); // 11   PRODUCT BY USER ID (SELLER)
router.get('/category/:category', ProductController.getProductsByCategory); // 12   PRODUCT BY CATEGORY

module.exports = router