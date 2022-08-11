import mongoose from "mongoose";

const hoursSchema = mongoose.Schema({
  months: Object,
  year: String,
});

const CreateHours = mongoose.model("userHours", hoursSchema);

export default CreateHours;
