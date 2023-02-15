import nc from "next-connect";
import bcrypt from "bcryptjs";
import User from "../../database/usermodel";
import db from "../../database/db";
import { signToken } from "../../authjwt";
 const handler = nc();
 handler.post(async(req,res) =>{
  await db.connect();
  const user = await User.findOne({ email: req.body.email });
  if(user && bcrypt.compareSync(req.body.password,user.password)){
    const token  = signToken(user);
    console.log('sucesss')
    res.send({
        token,
        _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      });
    } else {
      res.status(401).send({ message: 'Invalid user or password' });
      console.log('failure')
    }
    await db.disconnect();
  });
  export default handler;