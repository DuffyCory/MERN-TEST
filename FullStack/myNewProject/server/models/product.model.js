const mongoose = require('mongoose');

//setting up a new schema - this defines everything that will be in the model
const ProductSchema = new mongoose.Schema({
    title: { type: String },
    description: { type: String },
    price: { type: Number }
}, { timestamps: true });

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;

