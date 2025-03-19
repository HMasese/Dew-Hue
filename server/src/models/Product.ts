import { Schema, model, Document } from 'mongoose';

interface IProduct extends Document {
    name: string;
    image: string;
    brand: string;
    price: string;
    link: string;
}

const productSchema = new Schema<IProduct>({
    name: { type: String, required: true },
    image: { type: String, required: true },
    brand: { type: String, required: true },
    price: { type: String, required: true },
    link: { type: String, required: true }
});

const Product = model<IProduct>('Product', productSchema);

export { Product, IProduct };