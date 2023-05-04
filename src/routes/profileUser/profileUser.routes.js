import { Router } from "express";
import { showProfileData } from "../../controllers/profileUser/profileUser.controllers.js";

const router = Router();

router.get("/profile/:id", showProfileData)

export default router;