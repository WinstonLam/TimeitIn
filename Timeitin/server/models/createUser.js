import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  color: String,
  pincode: String,
  birthdate: String,
  phonenumber: String,
  createdAt: { type: Date, default: Date.now },
});

const CreateUser = mongoose.model("createUser", userSchema);

export default CreateUser;
