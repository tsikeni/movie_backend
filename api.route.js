const express = require('express')
const router = express.Router()
const apiController =   require('./api.controller');

router.get('/longest-duration-movies', apiController.findAll);
router.post('/new-movie', apiController.create);
router.get('/top-rated-movies', apiController.findAllBig)

module.exports = router