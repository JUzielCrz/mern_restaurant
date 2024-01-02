import mongoose from "mongoose";

const customerSchema = new mongoose.Schema(
  {
    name: {type: String, required: true },
    phone: {type: String, required: false },
    address: {type: String, required: false },
    firstVisit: {type: Date, required: false },
    observation: {type: String, required: false },
    facture:  {type: Boolean, required: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Customer", customerSchema);