import { Schema, model } from 'mongoose';
import { Category } from './Category';

const productSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: Schema.Types.ObjectId, ref: 'Category' }
});

export const Product = model('Product', productSchema);
