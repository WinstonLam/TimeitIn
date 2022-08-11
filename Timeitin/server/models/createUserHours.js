import mongoose from "mongoose";

const userHoursSchema = mongoose.Schema({
  months: {},
  year: String,
});

const CreateUserHours = mongoose.model("createUserHours", userHoursSchema);

export default CreateUserHours;
