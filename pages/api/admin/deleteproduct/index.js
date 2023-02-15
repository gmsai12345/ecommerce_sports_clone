import nc from 'next-connect';
import db from '../../../../database/db';
import model from '../../../../database/model';

const handler = nc();

handler.delete(async (req, res) => {
  await db.connect();
  try {
    const product = await model.findOne({prod:req.body.prod});

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    await product.remove();

    await db.disconnect();

    res.json({ message: 'Product removed successfully' });
  } catch (error) {
    await db.disconnect();
    res.status(500).json({ message: error.message });
  }
});

export default handler;
