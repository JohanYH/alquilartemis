import {Router} from "express";

import { methodsHTTPS as constructoraController } from "../controllers/constructora.controllers.js";
const router = Router();

router.get("/", constructoraController.getConstructora);
router.post("/", constructoraController.addConstructora);
router.get("/:id", constructoraController.getConstructoras);
router.delete("/:id",constructoraController.deleteConstructoras);
router.put("/:id", constructoraController.updateConstructora);

export default router;