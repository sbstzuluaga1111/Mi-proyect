import express from "express";
import categoriaRoutes from "./routes/categorias.routes.js";
import proveedoresRoutes from "./routes/proveedores.routes.js";
import cors  from "cors"

const app = express();
app.set("port",8000);

//Middleware
app.use(express.json())
app.use(cors())

//Route 
app.use("/api/categorias",categoriaRoutes);
app.use("/api/proveedores",proveedoresRoutes);

export default app;