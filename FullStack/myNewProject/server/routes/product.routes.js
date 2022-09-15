const ProductController = require('../controllers/product.controller');  //Import the code from person.controller.js

module.exports = (app) => {
    app.post('/api/products', ProductController.createProduct);
    app.get('/api/products', ProductController.getAllProducts);
    app.get('/api/product/:id', ProductController.getOneProduct);
}

