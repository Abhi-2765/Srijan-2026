import { Router } from "express";
import { allowentry, exit, eventend } from "../controllers/Qrcontroller.js";
import { isAdmin } from "../middleware/adminMiddleware.js";

const router = Router();

router.post("/allow-entry",isAdmin, allowentry);
router.post("/exit",isAdmin, exit);
router.post("/event-end", isAdmin, eventend);

export default router;