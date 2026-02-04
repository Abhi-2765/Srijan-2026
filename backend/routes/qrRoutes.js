import { Router } from "express";
import { allowentry, exit, eventend } from "../controllers/Qrcontroller.js";
import { isAdmin } from "../middleware/adminMiddleware.js";

const router = Router();

router.post("/allow-entry", allowentry);
router.post("/exit", exit);
router.post("/event-end", eventend);

export default router;