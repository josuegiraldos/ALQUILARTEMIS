import { Router } from "express";
import { methodsHTTP as constructoraController } from "../controllers/constructora.controllers.js";

const router = Router();

router.get("/", constructoraController.getConstructoras);
router.post("/", constructoraController.addConstructora);
// La ruta recibe un parámetro
router.get("/:id", constructoraController.getConstructuraById);
router.delete("/:id", constructoraController.deleteConstructora);
router.put("/:id", constructoraController.updateConstructora);

export default router;