import express from "express";
import { getUsers, createUser, deleteUser, editUser} from "../controllers/users.js";

const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.delete("/:id", deleteUser);
router.patch("/:id", editUser);

export default router;
