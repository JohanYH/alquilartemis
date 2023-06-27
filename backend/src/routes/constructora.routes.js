import {Router} from "express";

import { methodsHTTPS as constructoraController } from "../controllers/constructora.controllers.js";
const router = Router();

router.get("/", constructoraController.getConstructora);
router.post("/", constructoraController.addConstructora)

export default router;