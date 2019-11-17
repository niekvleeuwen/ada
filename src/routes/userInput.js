const express = require('express')
const router = express.Router()

/* GET user input listing. */
router.get('/', function (req, res, next) {
    res.json({code: '400', error: 'No parameters found' });
})

/* POST user input listing. */
router.post('/', function (req, res, next) {
    /* Expected params: token, textInput */
    if(req.body.token == null){
        res.json({code: '400', error: 'Token not entered' });
    }else if(req.body.textInput == null){
        res.json({code: '400', error: 'TextInput not entered' });
    }else{
        //call the NLP here
        res.json({code: '200', response: 'The answer you are looking for...' });
    }
})


module.exports = router
