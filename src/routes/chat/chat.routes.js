import { Router } from "express";
import { submitMessage } from "../../controllers/chat/chat.controllers.js";
import { showMessage } from "../../controllers/chat/chat.controllers.js";

const router = Router();

// show message
router.post("/submit", submitMessage);

// submit message
router.get("/show", showMessage);

export default router;
