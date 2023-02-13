// sending inital data to the database from the product.js
import nc from 'next-connect';
import model from "../../database/model"
import db from '../../database/db';
import products from "../.././product";

const handler = nc();
handler.get(async (req,res)=>{
    await db.connect();
    await model.deleteMany();
    await model.insertMany(products.products, products);
    await db.disconnect();
    res.send({message:"seeded"})
})
export default handler