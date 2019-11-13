var express = require('express')
var router = express.Router()

/* GET user input listing. */
router.get('/', function (req, res, next) {
    res.json({code: '400', error: 'No parameters found' });
})

module.exports = router
