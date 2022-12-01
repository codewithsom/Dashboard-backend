import express from 'express'
import { getAllCourse, createCourse, updateCourse, deleteCourse } from '../controllers/courseController.js'

const courseRouter = express.Router()

courseRouter.get('/', getAllCourse)
courseRouter.post('/', createCourse)
courseRouter.delete('/:id', deleteCourse)
courseRouter.patch('/:id', updateCourse)

export default courseRouter

