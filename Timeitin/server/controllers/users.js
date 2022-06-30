import CreateUser from "../models/createUser.js";

export const getUsers = async (req, res) => {
  try {
    const users = await CreateUser.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  const user = req.body;

  try {
    const newUser = new CreateUser(user);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
