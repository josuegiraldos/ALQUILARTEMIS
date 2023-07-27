import { Router } from "express";
import { methodsHTTP as productoController } from "../controllers/producto.controllers.js";

const router = Router();

router.get("/", productoController.getProductos);
router.post("/", productoController.addProductos);
// La ruta recibe parámetros
router.get("/:id", productoController.getProductoById);
router.delete("/:id", productoController.deleteProducto);
router.put("/:id", productoController.updateProducto);

export default router;