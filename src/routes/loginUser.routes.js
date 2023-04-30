import { Router } from "express";
import { loginUser } from "../controllers/auth/loginUser.js";

// instance router
const router = Router();

router.get("/login", loginUser)

export default router