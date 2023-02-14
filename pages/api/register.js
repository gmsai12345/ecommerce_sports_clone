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
  await db.disconnect();
  
    const token  = signToken(newuser);
    res.send({
        token,
        _id: newuser._id,
        name: newuser.name,
        email: newuser.email,
        isAdmin: newuser.isAdmin,
      });
    
  });