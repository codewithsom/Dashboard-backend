import Form from '../model/testModel.js'
import mongoose from "mongoose"

export const getAllTest= async (req,res)=>{
    try {
        const tests= await Form.find()
        res.status(200).json({
            result:tests.length,
            data:{
                tests
            }
        })
    } catch (err) {
        res.status(404).json({message:err.message})
    }
}
export const createTest=async(req,res)=>{
    const test = req.body

    const newTest=await Form.create(test)
    try {
         res.status(201).json(newTest)
    } catch (err) {
        res.status(400).json({message:err.message})
    }
}

export const updateTest=async(req,res)=>{
    const { id } = req.params;
    const test = req.body
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No test with id: ${id}`);

    const updatedtest = await Form.findByIdAndUpdate(id, test, { new: true });

    res.status(200).json(updatedtest);
}

export const deleteTest=async(req,res)=>{
    const { id } = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No test with id: ${id}`);
   await Form.findByIdAndDelete(id);

   res.status(200).json({message:"test deleted successfully"});
}      