import nc from "next-connect"
import db from "../../../database/db"
import model from "../../../database/model"
const handler = nc();
handler.get(async(req,res) => {
    await db.connect();// connecting with the database
    const products = await model.find({})  // find all the products to be displayed
    await db.disconnect(); // disconnecting must
    res.send(products);
    
    // sending response as the fetched products
    console.log(products);
});
export default handler;