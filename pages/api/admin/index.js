import nc from "next-connect";
import db from "../../../database/db";
import User from "../../../database/usermodel";
 const handler = nc();
 handler.post(async(req,res) =>{
  await db.connect();
  const user = await User.findOne({ name:req.body.name }); 
  
  if(user && user.isAdmin){
    res.send({
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