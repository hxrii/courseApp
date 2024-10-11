const {Schema, default: mongoose} = require("mongoose")

const ObjectId = mongoose.Types.ObjectId;

const userSchema = Schema({
    email:{type:String, unique:true},
    password: String,
    firstName: String,
    lastName: String,
});

const adminSchema = Schema({
    email:{type:String, unique:true},
    password: String,
    firstName: String,
    lastName: String,

});

const courseSchema = Schema({
    title: String,
    description: String,
    price: Number,
    imageUrl: String,
    creatorId: ObjectId

});

const purchaseSchema = Schema({
    courseId: ObjectId,
    userId: ObjectId

});


const userModel = mongoose.Model("user",userSchema);
const adminModel = mongoose.model("admin",adminSchema);
const courseModel = mongoose.model("course",courseSchema);
const purchaseModel = mongoose.model("purchase",purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
}