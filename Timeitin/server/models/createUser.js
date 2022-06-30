import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  firstname: String,
  lastname: String,
  birthdate: Date,
  phonenumber: String,
  email: String,
  pincode: String,
  createdAt: { type: Date, default: Date.now },
});

const CreateUser = mongoose.model("createUser", userSchema);

export default CreateUser;
