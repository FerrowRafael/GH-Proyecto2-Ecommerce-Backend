const CategoryModel = require('../models/Category.js');

const CategoryController = {
    getCategoriesAll( req, res ) {
        CategoryModel.find({})
        .then(categories=>res.send(categories))
        .catch( error => res.status( 500 ).send( error ) )
    },

    addCategory( req, res ) {
        CategoryModel.create(req.body)
            .then(category => res.status(201).send(category))
            .catch(error => {
                console.error(error);
                res.send(error)
            })
    } 
}

module.exports = CategoryController;