const {Router} = require("express")
const courseRouter = Router();

app.get('/courses',function(req,res){
    res.json({
        message:'Hit Sign Up endpoint'
    })
})
        
app.post('/course/purchase',function(req,res){
    res.json({
        message:'Hit Sign Up endpoint'
    })
})
    


module.exports={
    courseRouter: courseRouter
}