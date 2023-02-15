// import nc from 'next-connect';
// import Product from "../../../../database/model";
// import db from "../../../../database/db";
// const handler = nc();

// handler.put(async (req, res) => {
//   try {
//     await db.connect();
    

//     const product = await Product.find({prod:req.body.prod});

//     if (!product) {
//       return res.status(404).json({ message: 'Product not found' });
//     }
 
//     product.name = req.body.name;
//     product.category = req.body.category;
//     product.prod = req.body.prod;
//     product.owner = req.body.owner;
//     product.countInStock = req.body.countInStock;
//     product.description = req.body.description;
//     product.price = req.body.price;
//     product.colour = req.body.colour;

//     const updatedProduct = await product.save();

   

//     res.send(updatedProduct);
//     console.log("send updated")
//     await db.disconnect();
    
//   } catch (error) {
//     await db.disconnect();
//     res.status(500).json({ message: error.message });
//   }
// });

// export default handler;
import nc from 'next-connect';
import Product from '../../../../database/model';
import db from '../../../../database/db';

const handler = nc();

handler.post(async (req, res) => {

    console.log('Connecting to database...');
    await db.connect();
    console.log('Connected to database.');

    const product = await Product.findOne({ prod: req.body.prod });

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    product.name = req.body.name;
    product.category = req.body.category;
    product.prod = req.body.prod;
    product.owner = req.body.owner;
    product.countInStock = req.body.countInStock;
    product.description = req.body.description;
    product.price = req.body.price;
    product.colour = req.body.colour;

    const updatedProduct = await product.save();

    res.send(updatedProduct);
    console.log('send updated');
    await db.disconnect();
   
});

export default handler;
