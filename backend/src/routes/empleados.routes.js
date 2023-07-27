import { Router } from "express";
import { methodsHTTP as empleadoController } from "../controllers/empleado.controller.js";

const router = Router();

router.get("/", empleadoController.getEmpleados);
router.post("/", empleadoController.addEmpleados);
// La ruta recibe parámetro
router.get("/:id", empleadoController.getEmpleadoById);
router.delete("/:id", empleadoController.deleteEmpleado);
router.put("/:id", empleadoController.updateEmpleado);

export default router;