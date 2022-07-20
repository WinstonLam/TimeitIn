import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  color: { r: Number, g: Number, b: Number, a: Number },
  pincode: String,
  birthdate: Date,
  function: String,
  phonenumber: String,
  createdAt: { type: Date, default: Date.now },
});

const CreateUser = mongoose.model("createUser", userSchema);

export default CreateUser;
