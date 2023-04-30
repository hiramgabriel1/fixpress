import { Router } from "express";
import { profileProvider } from "../../controllers/providers/profileProviders.controllers.js";

const router = Router();

router.get("/profile", profileProvider)

export default router;