import mongoose from "mongoose";
import Course from "../model/courseModel.js";

export const getAllCourse = async(req, res) => {
    try {
        const courses = await Course.find()
        res.status(200).json({
            result: courses.length,
            data: {
                courses
            }
        })
    } catch(err) {
        res.status(404).json({message:err.message})
    }
}

export const createCourse = async(req, res) => {
    let course = req.body
    try {
        const newcourse = await Course.create(course)
        res.status(201).json({
            data: {
                newcourse
            }
        })
    } catch(err) {
        res.status(400).json({message:err.message})
    }
}

export const updateCourse = async(req, res) => {
    const { id } = req.params;
    const course = req.body

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No course with id: ${id}`);

    const updatedcourse = await Course.findByIdAndUpdate(id, course, {new: true});
    res.status(200).json(updatedcourse);
}

export const deleteCourse = async(req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No test with id: ${id}`);
    await Course.findByIdAndDelete(id);
    res.status(200).json({message: "deleted successfully"});
}