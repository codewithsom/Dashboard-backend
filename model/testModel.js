import mongoose from "mongoose";

const testSchema=new mongoose.Schema({
    category:String,
    subCategory:String,
    title:String,
    testType:String,
    testFont:String,
    price:Number,
    mrp:Number,
    Duration:Number,
    image:String,
    testNames:String,
    description:String
})

const Test = mongoose.model('Test',testSchema)

export default Test