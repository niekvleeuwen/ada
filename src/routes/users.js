var express = require('express')
var router = express.Router()

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.json({code: '400', error: 'No parameters found' });
})

router.get('/cool', function (req, res, next) {
  res.json({code: '200', error: 'You are so cool!' });
})

module.exports = router
