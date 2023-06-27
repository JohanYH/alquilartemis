import {Router} from "express";

import { methodsHTTPS as productoController } from "../controllers/productos.controllers.js";
const router = Router();

router.get("/", productoController.getProductos);
router.post("/",productoController.addProductos)

export default router;