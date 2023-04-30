import { Router } from "express";
import colors from "colors";
import bcrypt from "bcrypt";
import { Pool } from "../config/conex.js";
import { createUser, getUsers } from "../controllers/auth/createUser.js";

// instance router
const router = Router();

// endpoint create user
router.post("/submit", createUser)

// endpoint
router.get("/users", getUsers)
export default router;