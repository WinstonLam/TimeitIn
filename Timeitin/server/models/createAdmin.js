import mongoose from "mongoose";

const adminSchema = mongoose.Schema({
  pincode: [String],
  createdAt: { type: Date, default: Date.now },
});

const CreateAdmin = mongoose.model("createAdmin", adminSchema);

export default CreateAdmin;
