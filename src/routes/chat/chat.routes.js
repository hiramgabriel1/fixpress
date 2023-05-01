import { Router } from "express";
import { submitMessage } from "../../controllers/chat/chat.controllers.js";
import { showMessage } from "../../controllers/chat/chat.controllers.js";

const router = Router();

// show message
router.get("/submit", submitMessage);

// submit message
router.post("/show", showMessage);

export default router;
