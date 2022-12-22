
class orderController
{
    orders = require("../models/orders")
    db = require("./dbController")
    
    //methods
    
    //getting all orders
    static findOrder = async (req,res) => {
        try {
            const orders = require("../models/orders")
            const db = require("./dbController")

            db.connect();

            const exists = await orders.exists({email: req.body.email});

            if (!exists) throw new Error("order does not exists");

            const order = await orders.find();

            res.status(201).json(order);

        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    //creating order
    static createOrder = async (req, res) => {
        try {
            const orders = require("../models/orders")
            const db = require("./dbController")

            db.connect();
    
            const exists = await orders.exists({email: req.body.email});
    
            if (exists) throw new Error("order already exists");

            const order = await orders.create({
                name: req.body.name,
                email: req.body.email,
                role: req.body.role,
                password: req.body.password,
                phone: req.body.phone
            });
    
            res.status(201).json(order);
            
    
        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    //deleting order
    static deleteOrder = async (req,res) => {
        try {
            const orders = require("../models/orders")
            const db = require("./dbController")

            db.connect();
    
            const exists = await orders.exists({email: req.body.email});
    
            if (!exists) throw new Error("order does not exists");

            const order = await orders.deleteMany({email: req.body.email});

            res.status(201).json(order);

        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }

    //updating order
    static updateOrder = async (req,res) => {
        try {
            const orders = require("../models/orders")
            const db = require("./dbController")

            db.connect();
    
            const exists = await orders.exists({email: req.body.email});
    
            if (!exists) throw new Error("order does not exists");

            const order = await orders.updateOne({email: req.body.email});

            res.status(201).json(order);

        } catch (error) {
            res.status(400).json({message: error.message})
        }
    }
}

module.exports = orderController;