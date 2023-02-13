import mongoose from 'mongoose';
const modelschema = new mongoose.Schema(
     { 
        name: { type: String, required: true },
        category: { type: String, required: true },
        image: { type: String, required: true },
        prod: { type: String, required: true, unique: true },
        price: { type: Number, required: true },
        rating: { type: Number, required: true, default: 0 },
        numReviews: { type: Number, required: true, default: 0 },
        countInStock: { type: Number, required: true, default: 0 },
        description: { type: String, required: true },
    },
    {
        timestamps:true,
    }
);
const product  = mongoose.model.product || mongoose.model('Product',modelschema);
export default product;
// models done for database