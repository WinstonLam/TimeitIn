import express from "express";
import {
  getUsers,
  createUser,
  deleteUser,
  editUser,
  getUser,
} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.patch("/:id", editUser);

export default router;
