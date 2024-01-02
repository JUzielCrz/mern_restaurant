import mongoose from "mongoose";

const productSchema = new mongoose.Schema(
  {
    name: {type: String, required: true },
    unit: { type: String, required: true},
    price: { type: Number, required: true},
    category: { type: String, required: false},
    barcode: { type: String, required: false},
    description: { type: String, required: false},
    stock: { type: Number, required: false},
    //merma (Cuando algo se hecha a perdida)
    //perdida 
    stock_minimun: { type: Number, required: false},
    image: {type: String,required: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Product", productSchema);