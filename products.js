const mongoose = require('mongoose');

// Create a schema for the products
const productSchema = new mongoose.Schema({
    productId: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    price: { type: Number, required: true },
    SKU: { type: String, required: true },
    supplier: { type: String, required: true },
    unit: { type: String, required: true },
},{ timestamps: true });

// Create a model for the products
const Product = mongoose.model('Product', productSchema);

module.exports = Product;
