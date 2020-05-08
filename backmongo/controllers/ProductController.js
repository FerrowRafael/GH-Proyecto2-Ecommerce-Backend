const Product = require('../models/Product');

const ProductController = {

    // GET ALL PRODUCTS
    getProductsAll(req, res) {
        Product.find() //include equivalent
            .then(products => res.send(products))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // PRODUCT BY PRODUCT ID
    getProductById(req, res) {
        id = req.params._id
        Product.findById(id)
            .populate('userId')
            .then(product => res.send(product))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // PRODUCT BY PRODUCT NAME **
    getProductByName(req, res){
        name = req.params.name
        Product.findOne(name)
        .populate('userId')
        .then(product => res.send(product))
        .catch(error => {
            console.error(error);
            res.send(error)
        })
    },

    // INSERT PRODUCT
    addProduct(req, res) {
        req.body.userId = req.user._id
        Product.create(req.body)
            .then(product => res.status(201).send(product))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // UPDATE PRODUCT
    updateProduct(req, res) {
        req.body.userId = req.user._id
        Product.findByIdAndUpdate(req.params._id, req.body
            .then(product => res.status(201).send(`Product has been updated`, product))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
        )
    },

    // DELETE PRODUCT **Revisar y añadir mensaje detallado cuando se borre
    deleteProduct(req, res) {
        req.body.productId = req.product._id
        Product.findByIdAndDelete(req.body)
            .then(product => res
                .status(201)
                .send({message:`Product has been deleted.`}))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // GET PRODUCTS BEST (productos mas vendidos)
    getProductsBest(req, res) {
        Product.find() //include equivalent
            .then(products => res.send(products))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // GET PRODUCTS RECENT (productos mas recientes)
    getProductsRecent(req, res) {
        Product.find() //include equivalent
            .then(products => res.send(products))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // GET PRODUCTS SUGGESTED (productos sugeridos)
    getProductsSuggested(req, res) {
        Product.find() //include equivalent
            .then(products => res.send(products))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // GET PRODUCTS BY CATEGORY (productos por categoria)
    getProductsCategory(req, res) {
        Product.find({category: category}) //include equivalent
            .then(products => res.send(products))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },
}
module.exports = ProductController