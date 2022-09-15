const Product = require('../models/product.model');

// Mongoose's "create" method is run using our Product model to add a new product to our db's product collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client

module.exports = {

    createProduct: (req, res) => {
        Product.create(req.body)
        .then((newProduct) => res.json(newProduct))
        .catch((err) => console.log(err));
},

    getAllProducts: (req, res) => {
        Product.find({})
        .then((allProducts) => {res.json(allProducts);})
        .catch((err) => console.log(err))
},

    getOneProduct: (req, res) => {
        Product.findOne({_id: req.params.id})
        .then((oneProduct) => {res.json(oneProduct);})
        .catch((err) => console.log(err))
},

};

    
