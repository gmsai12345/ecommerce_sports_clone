import nc from "next-connect";
import User from "../../database/usermodel";
import db from "../../database/db";
 const handler = nc();
 handler.post(async(req,res) =>{
  await db.connect();
  const user = await User.findOne({ email: req.body.email });
  await db.disconnect();
  if(user && user.isAdmin === 'true'){
    res.send({ redirectUrl: '/dashboard' });
    } else {
      res.status(401).send({ message: 'not an admin' });
    }
  });