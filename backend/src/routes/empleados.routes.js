import {Router} from "express";

import { methodsHTTPS as empleadoController } from "../controllers/empleados.controllers.js";
const router = Router();

router.get("/", empleadoController.getEmpleado);
router.post("/", empleadoController.addEmpleados);

export default router;