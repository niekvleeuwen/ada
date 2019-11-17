// Handle index actions
exports.index = function (req, res) {
    res.json({
        code: "400",
        message: "No parameters found!",
    });
};

// Handle requests
exports.request = function (req, res) {
    /* Expected params: token, textInput */
    if(req.body.token == null){
        res.json({
            code: "400",
            error: "Token not entered"
        });
    }else if(req.body.textInput == null){
        res.json({
            code: "400",
            error: "TextInput not entered"
        });
    }else{
        //call the NLP here
        res.json({
            code: "200",
            message: "Yay!",
        });
    }
}