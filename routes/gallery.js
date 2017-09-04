var express = require('express');
var router = express.Router();

var gallery_controller = require('../controllers/galleryController');

router.get('/gallery', gallery_controller.gallery_list);

module.exports = router;