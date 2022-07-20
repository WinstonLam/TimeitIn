import CreateAdmin from "../models/createAdmin.js";

export const getAdmin = async (req, res) => {
  try {
    const users = await CreateAdmin.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};
