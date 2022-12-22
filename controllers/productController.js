
class productController
{
    //methods

    //getting all products
    static findProduct = async (req,res) => {
        try {
            const products = require("../models/products")
            const db = require("./dbController")

            db.connect();

            const exist = await products.exists({id: req.body.id});

            if (!exist) throw new Error("Product does not exists");
            
            const product = await products.find();

            res.status(201).json(product)

        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    //creating product
    static createProduct = async (req,res) => {
        try {
            const products = require("../models/products")
            const db = require("./dbController")

            db.connect();
            
            const product = await products.create({
                name: req.body.name,
                description: req.body.description,
                price: req.body.price,
                quantity: req.body.quantity
            });

            res.status(201).json(product)

        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    //deleting product
    static deleteProduct = async (req,res) => {
        try {
            const products = require("../models/products")
            const db = require("./dbController")

            db.connect();

            const exist = await products.exists({_id: req.body.id});

            if (!exist) throw new Error("Product does not exists");
            
            const product = await products.deleteOne({_id: req.body.id});

            res.status(201).json(product)

        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    //updating product
    static updateProduct = async (req,res) => {
        try {
            const products = require("../models/products")
            const db = require("./dbController")

            db.connect();

            const exist = await products.exists({id: req.body.id});

            if (!exist) throw new Error("Product does not exists");
            
            const product = await products.updateOne();

            res.status(201).json(product)

        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
}

module.exports = productController;