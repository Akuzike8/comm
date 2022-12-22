const express = require("express");
const router = express.Router();
const {findProduct,createProduct,deleteProduct,updateProduct} = require("../../controllers/productController");

//getting product
router.get("/", findProduct)

//creating product
router.post("/", createProduct)

//updating product
router.put("/", updateProduct)

//deleting product
router.delete("/", deleteProduct)

module.exports = router;