import {Router} from "express";
import { methodsHTTP as CategotiaController} from "../controllers/categoria.controller.js";

const router = Router();

router.post("/", CategotiaController.addCategorias)
router.get("/", CategotiaController.getCategorias)
//Ruta recibe un parametro
router.get("/:id", CategotiaController.getCategoria)
//La  ruta recibe un parametro a eliminar
router.delete("/:id", CategotiaController.delCategoria)
//Actualizar por base de la ruta
router.put("/:id", CategotiaController.updateCategorias)




export default router;