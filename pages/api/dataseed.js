import User from "../../database/usermodel";
import db from "../../database/db";
import data from "../.././product"
import nc from "next-connect";
const handler = nc();
handler.get(async (req, res) => {
    await db.connect();
    await User.deleteMany();
    await User.insertMany(data.users);
    await db.disconnect();
    res.send({ message: 'seeded successfully' });
  });
  export default handler;