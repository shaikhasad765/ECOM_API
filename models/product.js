// Importing Packages
const mongoose = require('mongoose');

// creating the product schema
const productSchema = new mongoose.Schema({
    name: String,
    quantity: Number
},{
    versionKey: false
});

// Creating a new model called "Product"
const Product = mongoose.model('Product', productSchema);

// Convert the product schema to JSON and log it
const schemaJson = JSON.stringify(productSchema.obj, null, 4);
console.log(schemaJson);

module.exports = Product;