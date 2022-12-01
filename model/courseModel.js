import mongoose from "mongoose";

const courseSchema = new mongoose.Schema({
    category: String,
    subCategory: String,
    title: String,
    price: Number,
    mrp: Number,
    image: String,
    tagName: String,
    description: String
})

const Course = mongoose.model('Course', courseSchema)

export default Course