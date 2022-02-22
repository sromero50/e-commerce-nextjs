var express = require('express');
var router = express.Router();
const categoriesController = require("../controllers/categoriesController")

/* get categories */
router.get('/', categoriesController.getAll)


/* post categories */
router.post('/', (req,res,next) => {req.app.validateToken(req,res,next)} , categoriesController.postCategory)

module.exports = router;