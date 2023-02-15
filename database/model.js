import mongoose from 'mongoose';
const { Schema } = mongoose;
mongoose.Promise = global.Promise;
const modelschema = new Schema(
     { 
        name: { type: String, required: true },
        category: { type: String, required: true },
        image: { type: String, required: true },
        prod: { type: String, required: true, unique: true },
        price: { type: Number, required: true },
        rating: { type: Number, required: true, default: 0 },
        numReviews: { type: Number, required: true, default: 0 },
        countInStock: { type: Number, required: true, default: 0 },
        colour: { type: String, required: true },
        description: { type: String, required: true },
        owner: { type: String, required: true}
    },
    {
        timestamps:true,
    }
);
const Product = mongoose.models.Product
  ? mongoose.model('Product')
  : mongoose.model('Product', modelschema);

export default Product;
// models done for database