import { Router } from "express";

//1. Importamos el metodo HTTP que esta en al carpeta Controllers y esta funcion sirve para llamar en las rutas
import { methodsHTTPS as categoriasController } from "../controllers/categoria.controllers.js";
const router = Router();

//2.El router se encarga de indentificar la ruta en la que se encuetra nuestro navegador
//2.1. El metodo Get llama a toda la base de datos y El metodo POST añade nueva base de datos
router.get("/", categoriasController.getCategorias);
router.post("/", categoriasController.addCategorias);

//2.2. El metodo Get con Id indentifica solo el id, el metodo Delete elimina con la Id Y El metodo PUT es como un Update que cambia la base de datos
router.get("/:id", categoriasController.getCategoria);
router.delete("/:id", categoriasController.deleteCategorias);
router.put("/:id", categoriasController.updateCategoria);

export default router;
