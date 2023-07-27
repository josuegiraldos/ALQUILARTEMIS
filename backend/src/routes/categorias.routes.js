import { Router } from "express";
import { methodsHTTP as categoriaController } from "../controllers/categoria.controllers.js";

const router = Router();

router.get("/", categoriaController.getCategorias);
router.post("/", categoriaController.addCategories);
// La ruta recibe un parámetro
router.get("/:id", categoriaController.getCategoriaById);
// La ruta debe recibir como parámetro el ID de la categoria
router.delete("/:id", categoriaController.deleteCategoria);
router.put("/:id", categoriaController.updateCategoria);

export default router;