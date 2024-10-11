const express = require('express')

const app = express();
const PORT = 6667

const {userHandle} = require("./routes/user");




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