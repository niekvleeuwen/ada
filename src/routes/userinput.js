var express = require('express')
var router = express.Router()

/* GET user input listing. */
router.get('/', function (req, res, next) {
    res.json({code: '400', error: 'No parameters found' });
})

/* POST user input listing. */
router.post('/', function (req, res, next) {
    /* Expected params: token, textinput */
    if(req.body.token == null || req.body.textinput == null){
        res.json({code: '400', error: 'No parameters found' });
    }else{
        //call the NLP here
        res.json({code: '200', error: 'The answer you are looking for...' });
    }
})


module.exports = router
