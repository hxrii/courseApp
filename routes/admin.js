const {Router} = require("express");
const adminRouter = Router();

adminRouter.post('/signup',function(req,res){
    res.json({
        message:'Hit Sign Up endpoint'
    })
})

adminRouter.post('/signin',function(req,res){
    res.json({
        message:'Hit Sign In endpoint'
    })
})

adminRouter.get('/course/list',function(req,res){
    res.json({
        message:'Hit Purchase endpoint'
    })
})

adminRouter.post('/course',function(req,res){
    res.json({
        message:'Hit Purchase endpoint'
    })
})

adminRouter.put('/course',function(req,res){
    res.json({
        message:'Hit Purchase endpoint'
    })
})

module.exports = {
    adminRouter: adminRouter
}