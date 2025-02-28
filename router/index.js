import express from "express";
import { createUser, deleteUser, editUser, getUser, saveUser, updateUser } from "../controller/user.controller.js";
const router = express.Router();

router.get("/get-user", getUser);
router.get("/create-user", createUser);
router.post("/create-user", saveUser);
router.get("/edit-user/:id", editUser);
router.post("/update-user/:id", updateUser);
router.post("/delete-user/:id", deleteUser);
export default router;
