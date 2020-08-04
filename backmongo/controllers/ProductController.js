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
        _id = req.params._id
        Product.findById(_id)
            .populate('userId')
            .then(product => res.send(product))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // PRODUCT BY PRODUCT NAME **
    getProductByName(req, res){
        userName = req.params.name
        Product.find({ userName: { $regex: 'sorv', $options: 'i'}})
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
        Product.findByIdAndUpdate(req.params._id, req.body)
            .then(product => res.send(product))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // DELETE PRODUCT **Revisar y añadir mensaje detallado cuando se borre
    deleteProduct(req, res) {
        console.log(req.user._id)
        req.body.userId = req.user._id
        Product.findByIdAndDelete(req.params._id)
            .then(product => res
                .status(201)
                .send({message:`Product has been deleted.`, product}))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // GET PRODUCTS BEST (productos mas vendidos)
    getProductsBest(req, res) {
        Product.find({"popularity" : {"$gte": "600"}})
            .then(products => res.send(products))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },

    // GET PRODUCTS RECENT (productos mas recientes)
    getProductsRecent(req, res) {
        Product.find({"createdAt" : {"$gte": new Date("2010-05-01T00:00:00.000Z")}})
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

    // FILTRO PRODUCTOS MAYOR A MENOR
    async ProductsSearchMay(req, res) {
        console.log(req.params.input)
        try {
            const products = await Product.find({
                $or:[ {'name': new RegExp(req.params.input, 'i')}, {'description': new RegExp(req.params.input, 'i')}] 
            })
            .sort({ price: -1}) ;;
            res.status(200).send(products);
        } catch (err) {
            console.log(err);
        }
    },

    // FILTRO PRODUCTOS MENOR A MAYOR
    async ProductsSearchMen(req, res) {
        console.log(req.params.input)
        try {
            const products = await Product.find({
                $or:[ {'name': new RegExp(req.params.input, 'i')}, {'description': new RegExp(req.params.input, 'i')}]  
            })
            .sort({ price: 1});
            res.status(200).send(products);
        } catch (err) {
            console.log(err);
        }
    },

     // FILTRO PRODUCTOS MAYOR A MENOR
     async ProductsMayor(req, res) {
        try {
            const products = await Product.find()
            .sort({ price: -1});
            res.status(200).send(products);
        } catch (err) {
            console.log(err);
        }
    },

    // FILTRO PRODUCTOS MENOR A MAYOR
    async ProductsMenor(req, res) {
        try {
            const products = await Product.find()
            .sort({ price: 1});
            res.status(200).send(products);
        } catch (err) {
            console.log(err);
        }
    },

    // PRODUCT BY USER ID (SELLER)
    getProductBySeller(req, res) {
        sellerId = req.params.userId
        Product.find({userId: sellerId})
            // .populate('userId')
            .then(product => res.send(product))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    },
}

    
module.exports = ProductController