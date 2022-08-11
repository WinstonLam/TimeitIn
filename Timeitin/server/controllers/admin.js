import CreateAdmin from "../models/createAdmin.js";

export const getAdmin = async (req, res) => {
  try {
    const admin = await CreateAdmin.find({});
    res.status(200).json(admin);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createAdmin = async (req, res) => {
  const admin = req.body;
  console.log(admin);

  try {
    const newAdmin = new CreateAdmin(admin);
    await newAdmin.save();
    res.status(201).json(newAdmin);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
