import {Router} from "express";

import { methodsHTTPS as productoController } from "../controllers/productos.controllers.js";
const router = Router();

router.get("/", productoController.getProductos);
router.post("/",productoController.addProductos);
router.get("/:id", productoController.getProducto);
router.delete("/:id", productoController.deleteProductos);
router.put("/:id", productoController.updateProducto);

export default router;