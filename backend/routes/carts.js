var express = require('express');
var router = express.Router();
const cartController = require("../controllers/cartsController");

//get cart of user by userid when login
router.get('/:userID', (req,res,next) => {req.app.validateToken(req,res,next)} , cartController.getCart);

//edit array of products by adding new products
router.put('/:userID', (req,res,next) => {req.app.validateToken(req,res,next)} , cartController.addProductToCart);

// delete product from array
router.delete('/:userID', (req,res,next) => {req.app.validateToken(req,res,next)} , cartController.removeProductFromCart);

module.exports = router;