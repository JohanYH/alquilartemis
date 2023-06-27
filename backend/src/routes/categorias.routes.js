import {Router} from "express";

import { methodsHTTPS as categoriasController } from "../controllers/categoria.controllers.js";
const router = Router();

router.get("/", categoriasController.getCategorias);
router.post("/",categoriasController.addCategorias);

export default router;