import { Router } from "express";
import { createProvider } from "../../controllers/authProvider/createProvider.js";

const router = Router();

router.post("/new", createProvider)

export default router;