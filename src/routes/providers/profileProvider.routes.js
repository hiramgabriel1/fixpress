import { Router } from "express";
import { profileProvider } from "../../controllers/providers/profileProviders.controllers.js";

const router = Router();

router.get("/profile/:id", profileProvider)

export default router;