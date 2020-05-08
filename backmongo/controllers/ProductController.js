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
        name = req.params
        console.log(req.params.name)
        Product.find({'name': new RegExp(req.params.name, 'i')})
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
        Product.find() 
            .then(products => res.send(products))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // GET PRODUCTS RECENT (productos mas recientes)
    getProductsRecent(req, res) {
        Product.find({"createdAt" : {"$gte": new Date("2020-05-01T00:00:00.000Z")}})
            .then(products => res.send(products))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // GET PRODUCTS SUGGESTED (productos sugeridos)
    getProductsSuggested(req, res) {
        Product.find()
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

    async ProductsSearch(req, res) {
        console.log(req.params.input)
        try {
            const products = await Product.find({
                $or:[ {'name': new RegExp(req.params.input, 'i')}, {'description': new RegExp(req.params.input, 'i')}]
                // $sort :  {  name:  < sort  order > ,  < field2 >:  < sort  order >  ...  }  
            });
            res.status(200).send(products);
        } catch (err) {
            console.log(err);
    
        }
    
    }
}
module.exports = ProductController