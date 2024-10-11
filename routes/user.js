function userHandle(app){

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

}

module.exports={
    userHandle:userHandle
}