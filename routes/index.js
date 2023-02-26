var express = require('express');
var router = express.Router();
const controladorHome = require('../controllers/controladorHome');

/* GET home page. */
router.get('/', controladorHome.index);

module.exports = router;
