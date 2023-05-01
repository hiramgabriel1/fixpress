import { Router } from "express";
import { createProvider } from "../../controllers/authProvider/createProvider.js";

const router = Router();

router.get("/login", createProvider)

export default router