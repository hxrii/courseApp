const {Router} = require("express")
const courseRouter = Router();

courseRouter.get('/courses',function(req,res){
    res.json({
        message:'Hit Sign Up endpoint'
    })
})
        
courseRouter.post('/purchase',function(req,res){
    res.json({
        message:'Hit Sign Up endpoint'
    })
})
    


module.exports={
    courseRouter: courseRouter
}