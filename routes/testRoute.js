import express from 'express'
import { getAllTest,createTest,deleteTest,updateTest } from '../controllers/testController.js'
const formRoutes =express.Router()

formRoutes.get('/',getAllTest)
formRoutes.post('/',createTest)
formRoutes.delete('/:id',deleteTest)
formRoutes.patch('/:id',updateTest)

export default formRoutes