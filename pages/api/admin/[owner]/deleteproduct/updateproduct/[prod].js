import nc from 'next-connect';
import db from '../../../../../../database/db';
import Product from '../../../../../../database/model';

const handler = nc();

handler.put(async (req, res) => {
  try {
    await db.connect();
    
    const prod = req.query.prod;

    const product = await Product.findById(prod);

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

    await db.disconnect();

    res.json(updatedProduct);
  } catch (error) {
    await db.disconnect();
    res.status(500).json({ message: error.message });
  }
});

export default handler;
