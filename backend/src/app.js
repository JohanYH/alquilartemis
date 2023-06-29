import express, { json } from "express";
import categoriasRoutes from "./routes/categorias.routes.js";
import constructoraRoutes from "./routes/constructora.routes.js";
import productosRoutes from "./routes/productos.routes.js";
import empleadosRoutes from "./routes/empleados.routes.js";

const app = express();

app.set("port", 5001);
app.use(express.json());

app.use("/api/categorias",categoriasRoutes);
app.use("/api/constructoras", constructoraRoutes);
app.use("/api/productos", productosRoutes)
app.use("/api/empleados", empleadosRoutes)

export default app;