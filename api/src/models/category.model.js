import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
  {
    name: {type: Number, required: true },
    color: {type: Boolean, required: false },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("category", categorySchema);