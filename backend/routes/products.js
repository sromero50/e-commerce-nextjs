var express = require('express');
var router = express.Router();

const productsController = require("../controllers/productsController");

/*get all products */
router.get('/', productsController.getAll);

/*get on sale products */
router.get('/onsale', productsController.getOnSale);

/*get one product */
router.get('/product/:id', productsController.getByID);

/*post product */
router.post('/', (req,res,next) => {req.app.validateToken(req,res,next)} , productsController.postProduct);

/*edit product */
router.put('/:id', (req,res,next) => {req.app.validateToken(req,res,next)} , productsController.editProduct);

/*delete product */
router.delete('/:id', (req,res,next) => {req.app.validateToken(req,res,next)} , productsController.deleteProduct);


module.exports = router;
