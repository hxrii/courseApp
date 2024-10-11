const {Router} = require("express");

const userRouter = Router();

app.post('/signup',function(req,res){
    res.json({
        message:'Hit Sign Up endpoint'
    })
})

app.post('/signin',function(req,res){
    res.json({
        message:'Hit Sign In endpoint'
    })
})

app.get('/purchases',function(req,res){
    res.json({
        message:'Hit Purchase endpoint'
    })
})



module.exports={
    userRouter: userRouter
}