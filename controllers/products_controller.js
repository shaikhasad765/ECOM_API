const Product = require('../models/product');

// Function to fetch and return all products
module.exports.products = function(req, res){
    Product.find({}, function(err, foundProducts){
        //check if error
        if(err){
            res.send(err);
        }else{
            // Get Data
            const Products = foundProducts.map(product => {
                return {
                    id: product.id,
                    name: product.name,
                    quantity: product.quantity
                };
            });

            res.send({ data: { products: Products } });
        }
    });
}


// Function to create a new product
module.exports.create = function(req, res){
    const quantity = parseInt(req.body.quantity);
    const name = req.body.name;

    // Check if the name is empty
    if (!name || name.trim() === '') {
        res.send({message:'Name must not be empty'});
        return;
    }

    //Check if the Entered Quantity is a Valid Number Not A String And Check If it Contain String
    if (isNaN(quantity) || !(/^\d+$/.test(req.body.quantity))){
        res.send({message:'Quantity must be a number and Should not be Empty'});
        return;
    }
    // If Valid
    const newProduct = new Product({
        name: req.body.name,
        quantity: quantity
    });

    newProduct.save(function(err){
        if(err){
            res.send(err);
        }else{
            const responseData = {
                product: {
                    name: req.body.name,
                    quantity: quantity
                }
            };
            res.send({message: (`A New Product ${req.body.name} has been added Successfully.`), data: responseData });
        }
    });
};


// Function to delete a product using its ID
module.exports.delete = function(req, res){
    const ID = req.params.productID;

    Product.deleteOne({ _id: ID }, function(err, found){
        //Check if Error
        if(err){
            res.send({message: "Product not found. Enter a valid Product ID to Delete." });
        }else{
            //Check if the Entered Product ID is Valid 
            if(found.deletedCount === 0) {
                return res.send({message: "Product not found. Enter a valid Product ID to Delete." });
            }else{
                //If Valid
                res.send({
                    data:{message: `The Product named ${req.body.name} has been deleted successfully`}
                });
            }
        }
    });
};


// Function to update a product's quantity
module.exports.updateQuantity = function(req, res) {
    const ID = req.params.productID;

    // Find the product using ID
    Product.findById(ID, function(err, found) {
        if (err) {
            res.send({message: "Product not found. Enter a valid Product ID to Update." });
        } else {
            // Check if the Entered Product ID is Valid 
            if (!found) {
                return res.send({data: { message: "Product not found. Enter a valid Product ID to Update." } });
            }

            // Check if the Entered Quantity is a Valid Number Not A String And Check If it Contain String
            const number = parseInt(req.query.number);

            if (isNaN(number) || !/^[+-]?\d+$/.test(req.query.number)) {
                return res.send({data: { message: "Invalid Data Entered, Please Enter Data in Numbers Only To Update" } });
            }

            // To Increase the Quantity of product Use Command as - http://localhost:8000/products/<id of the product>/update_quantity/?number=10
            // To Decrease the Quantity of product Use Command as - http://localhost:8000/products/<id of the product>/update_quantity/?number=-10

            const newQty = found.quantity + number;

            // Update the product's quantity
            Product.findByIdAndUpdate(ID, { quantity: newQty }, { new: true }, function(err, updatedProduct) {
                if (err) {
                    res.send(err);
                } else {
                    const UProduct = {
                        id: updatedProduct.id,
                        name: updatedProduct.name,
                        quantity: updatedProduct.quantity
                    };

                    res.send({
                        data: {
                            product: UProduct,
                            message: `The Quantity of ${found.name} has been updated successfully`
                        }
                    });
                }
            });
        }
    });
};

