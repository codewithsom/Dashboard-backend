import User from "../model/userModel.js";
import { loginauth, registerauth }  from "../services/authService.js"


export const login=async (req, res) => {
  const { email, password } = req.body;
  try {
    const result = await loginauth(email, password);
    return res.send(result);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message, err });
  }
};

export const register=async (req, res) => {
  const { name, phone, email, password } = req.body;
  try {
    const result = await registerauth(name, phone, email, password);
    return res.send(result);
  } catch (err) {
    console.log(err);
    return res.status(400).json({ message: err.message });
  }
};


export const allUser=async(req,res)=>{
  try {
    const users = await User.find()
    res.status(200).json({
        result:users.length,
        data:{
          users
        }
    })
} catch (err) {
    res.status(404).json({message:err.message})
}
}

