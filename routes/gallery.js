var express = require('express');
var router = express.Router();

var photo_controller = require('../controllers/photoController');

// GET list of paintings in gallery (w/ search queries)
router.get('/gallery', photo_controller.photo_list);

// GET create new image entry
//router.get('/gallery/photo/create', photo_controller.photo_create_get);

// POST new image to gallery
//router.post('/gallery/photo/create', photo_controller.photo_create_post);

// GET details for specific photo
//router.get('/gallery/photo/:id', photo_controller.photo_details);

// POST delete specific photo
//router.post('gallery/photo/:id/delete', photo_controller.photo_delete_post);

// POST update specific photo
//router.post('gallery/photo/:id/update', photo_controller.photo_update_post);

module.exports = router;