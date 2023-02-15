import nc from "next-connect";
import bcrypt from "bcryptjs";
import User from "../../database/usermodel";
import db from "../../database/db";
import { signToken } from "../../authjwt";
 const handler = nc();
 handler.post(async(req,res) =>{
  await db.connect();
  const newuser = new User({ 
    name: req.body.name,
    email: req.body.email, 
    password: bcrypt.hashSync(req.body.password),
    isAdmin: req.body.isAdmin, });
    const user = await newuser.save();
  // await db.disconnect();
  
    const token  = signToken(user);
    res.send({
        token,
        _id: user._id,
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
      });
      await db.disconnect();
  });

  export default handler;