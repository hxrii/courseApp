const {Router} = require("express");

const userRouter = Router();

userRouter.post('/signup',function(req,res){
    res.json({
        message:'Hit Sign Up endpoint'
    })
})

userRouter.post('/signin',function(req,res){
    res.json({
        message:'Hit Sign In endpoint'
    })
})

userRouter.get('/purchases',function(req,res){
    res.json({
        message:'Hit Purchase endpoint'
    })
})



module.exports={
    userRouter: userRouter
}