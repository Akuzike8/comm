const express = require("express");
const router = express.Router();
const {createUser,findUser,updateUser,deleteUser} = require("../../controllers/userController");

//getting user
router.get("/", findUser);

//creating user
router.post('/', createUser);

//updating user
router.put("/", updateUser);

//deleting user
router.delete("/", deleteUser);

module.exports = router;