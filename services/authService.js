import User from "../model/userModel.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'

export const loginauth = async (email, password) => {
  const user =await User.findOne({ email });

  if (!user) {
    throw new Error("User not found");
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    throw new Error("Incorrect password");
  }
  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
    expiresIn: "365d",
  });

  return { user, token };
};

export const registerauth = async (name, phone, email, password) => {
    const user = await User.findOne({ email });
  
    if (user) {
      throw new Error("User already exists");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    
    const newUser =await User.create({
      name: name,
      email: email,
      phone: phone,
      password: hashedPassword
    });
  
    const token = jwt.sign({ id: newUser._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "365y",
    });
  
    return { user: newUser, token };
  };