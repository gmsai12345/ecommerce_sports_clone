import nc from "next-connect";

import model from "../../../database/model";
import db from "../../../database/db";
 const handler = nc();
 handler.post(async(req,res) =>{
  await db.connect();
  const newdata = new model({ 
    name: req.body.name,
    category: req.body.category,
    prod: req.body.prod,
    owner: req.body.owner,
    countInStock: req.body.countInStock,
    description: req.body.description,
    price: req.body.price,
    colour: req.body.colour, 
     });
     console.log(newdata)
  await db.disconnect();
  
    res.send({
        _id: newuser._id,
        name: newdata.name,
        category: newdata.category,
        prod: newdata.prod,
        owner: newdata.owner,
        countInStock: newdata.countInStock,
        description: newdata.description,
        price: newdata.price,
        colour: newdata.colour,
      });
    
  });