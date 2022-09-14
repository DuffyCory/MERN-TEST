const Product = require('../models/product.model');

// Mongoose's "create" method is run using our Product model to add a new product to our db's product collection.
    // request.body will contain something like {firstName: "Billy", lastName: "Washington"} from the client

module.exports = {

    createProduct: (req, res) => {
        Product.create(req.body)
        .then((newProduct) => res.json(newProduct))
        .catch((err) => console.log(err));
}
};
