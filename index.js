const express = require('express')

const app = express();
const PORT = 6667


app.post('/user/signup',function(req,res){
    res.json({
        message:'Hit Sign Up endpoint'
    })
})

app.post('/user/signin',function(req,res){
    res.json({
        message:'Hit Sign In endpoint'
    })
})

app.get('/user/purchases',function(req,res){
    res.json({
        message:'Hit Purchase endpoint'
    })
})

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



app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}.`)
})