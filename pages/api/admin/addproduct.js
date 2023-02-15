import nc from "next-connect";

import Product from "../../../database/model";
import db from "../../../database/db";
 const handler = nc();
 handler.post(async(req,res) =>{
  await db.connect();
  const data = new Product({ 
    name: req.body.name,
    category: req.body.category,
    prod: req.body.prod,
    owner: req.body.owner,
    countInStock: req.body.countInStock,
    description: req.body.description,
    price: req.body.price,
    colour: req.body.colour, 
    image:req.body.image,
     });
     const newdata = await data.save();
     console.log(newdata)
 
  
    res.send({
        _id: newdata._id,
        name: newdata.name,
        category: newdata.category,
        prod: newdata.prod,
        owner: newdata.owner,
        countInStock: newdata.countInStock,
        description: newdata.description,
        price: newdata.price,
        colour: newdata.colour,
        image: newdata.image,
      });
      await db.disconnect();
    
  });
  export default handler;