import { Router } from "express";
import { loginUser } from "../controllers/auth/loginUser.js";

// instance router
const router = Router();

// lOGIN user normal
router.post("/login", loginUser)

export default router