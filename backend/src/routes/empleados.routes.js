import {Router} from "express";

import { methodsHTTPS as empleadoController } from "../controllers/empleados.controllers.js";
const router = Router();

router.get("/", empleadoController.getEmpleado);
router.post("/", empleadoController.addEmpleados);
router.get("/:id", empleadoController.getEmpleados);
router.delete("/:id", empleadoController.deleteEmpleado);
router.put("/:id", empleadoController.updateEmpleado);

export default router;