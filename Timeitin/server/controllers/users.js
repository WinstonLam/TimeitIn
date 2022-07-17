import mongoose from "mongoose";
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

export const deleteUser = async (req, res) => {
  const { id: _id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "User not found" });

  try {
    await CreateUser.findByIdAndDelete(_id);
    res.status(200).json({ message: "User deleted" });
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};


export const editUser = async (req,res) => {
  const {id: _id} = req.params;

  if(!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({message: "User not found"});

  try{
    const updatedUser = await CreateUser.findByIdAndUpdate(_id, req.body, {new: true});
    res.json(updatedUser)
  } catch(error){
    res.status(404).json({message: error.message});
  }
}