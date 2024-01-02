import mongoose from "mongoose";

const orderDetailSchema = new mongoose.Schema(
  {
    productId: { type: mongoose.Types.ObjectId, ref: "Product" },
    orderTicketsId: { type: mongoose.Types.ObjectId, ref: "orderTicket" },
    quantity: {type: Number, required: true },
    estatus: {type: String, required: true },
    observation: {type: String, required: false },
  },
);

export default mongoose.model("OrderDetail", orderDetailSchema);