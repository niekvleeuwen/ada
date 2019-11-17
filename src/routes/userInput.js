const express = require('express')
const router = express.Router()

// Import textInput controller
var textInputController = require('../controllers/textInputController.js');

// Default routes
router.route('/')
    .get(textInputController.index)
    .post(textInputController.request);

module.exports = router
