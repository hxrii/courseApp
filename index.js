const express = require('express')

const app = express();
const PORT = 6667

const {userRouter} = require("./routes/user");
const {courseRouter} = require("./routes/course");


app.use("/user",userRouter);
app.use("/course",courseRouter);







app.listen(PORT,()=>{
    console.log(`Server running on Port ${PORT}.`)
})