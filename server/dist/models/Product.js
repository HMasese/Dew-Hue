import { Schema, model } from 'mongoose';
const productSchema = new Schema({
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: String, required: true },
    link: { type: String, required: true }
});
const Product = model('Product', productSchema);
export { Product };
