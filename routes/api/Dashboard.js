const express = require("express");
const router = express.Router();

router.get("/",(req,res) => {
    //number of orders
    //products almost out of stock
    //products sold in current month
    
    res.send("dashboard")
})
module.exports = router;