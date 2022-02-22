var express = require('express');
var router = express.Router();
const usersController = require("../controllers/usersController")

/* GET users listing. */

router.get('/', usersController.getAll);

/* signup users */

router.post('/signup', usersController.signup);


/* login users */
router.post('/login', usersController.login);


module.exports = router;
