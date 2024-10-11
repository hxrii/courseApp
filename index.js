const express = require('express')

const app = express();
const PORT = 9081

const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");
const { adminRouter } = require('./routes/admin');


app.use("/user",userRouter);
app.use("/course",courseRouter);
app.use("/admin",adminRouter)







app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}.`)
})