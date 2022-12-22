const express = require("express");
const router = express.Router();
const {findOrder,createOrder,deleteOrder,updateOrder} = require("../../controllers/orderController");

//getting Order
router.get("/", findOrder)

//creating Order
router.post("/", createOrder)

//updating Order
router.put("/", updateOrder)

//deleting Order
router.delete("/", deleteOrder)

module.exports = router;