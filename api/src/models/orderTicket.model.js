import mongoose from "mongoose";

const orderTicketSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Types.ObjectId, ref: "User" },
    customersId: { type: mongoose.Types.ObjectId, ref: "Customer" },
    orderType: {type: String, required: true },
    closingDate: {type: Date, required: false },
    table: {type: Number, required: false },
    numberPerson: {type: Number, required: false },
    pymentType: {type: String, required: false },
    total: {type: Number, required: false },
    discount: {type: Number, required: false, default:0 },
    cash: {type: Number, required: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("OrderTicket", orderTicketSchema);