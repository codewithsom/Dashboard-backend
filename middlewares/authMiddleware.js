import jwt from 'jsonwebtoken'
import User from '../model/userModal.js';
 

const auth = async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");

    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    if (!decoded._id) {
      console.log({ decoded });
      throw new Error();
    }
    const user = await User.findById(decoded._id);
    if (!user) {
      throw new Error();
    }
    req.token = token;
    req.user = user;
    console.log("User Middleware: ", user._id);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send({ error: "Please authenticate user." });
  }
};

