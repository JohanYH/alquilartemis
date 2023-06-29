import {Router} from "express";

import { methodsHTTPS as categoriasController } from "../controllers/categoria.controllers.js";
const router = Router();

router.get("/", categoriasController.getCategorias);
router.post("/",categoriasController.addCategorias);
router.get("/:id", categoriasController.getCategoria);
router.delete("/:id", categoriasController.deleteCategorias);
router.put("/:id", categoriasController.updateCategoria);

export default router;