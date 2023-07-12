import {Router} from "express";
import { methodsHTTP as ProveedoresController} from "../controllers/proveedores.controller.js";

const router = Router();

router.post("/", ProveedoresController.addProveedores)
router.get("/", ProveedoresController.getProveedores)
//Ruta recibe un parametro
router.get("/:id", ProveedoresController.getProveedor)
//La  ruta recibe un parametro a eliminar
router.delete("/:id", ProveedoresController.delProveedores)
//Actualizar por base de la ruta
router.put("/:id", ProveedoresController.updateProveedores)




export default router;