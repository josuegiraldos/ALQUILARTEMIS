// 1. Importar framework 'express'
import express from "express"; // Hay que ir al archivo package.json y modificar el 'type' a 'module'.
import cors from "cors";

// Importar 'router'
import categoriaRoutes from "./routes/categorias.routes.js";
import constructoraRoutes from "./routes/constructoras.routes.js";
import productoRoutes from "./routes/productos.routes.js";
import empleadoRoutes from "./routes/empleados.routes.js";

// Guardar todo el poder de express dentro de una constante.
const app = express();

// Crear el puerto del servidor
app.set("port", 5000);

// Middleware
app.use(express.json());

// Configuración de CORS
const corsOption = {
    methods: ["GET", "POST", "PUT", "DELETE"]
}

app.use(cors(corsOption));

// Routes
app.use("/api/categorias", categoriaRoutes);
app.use("/api/constructoras", constructoraRoutes);
app.use("/api/productos", productoRoutes);
app.use("/api/empleados", empleadoRoutes);


// Exportamos para que esté disponible en toda la aplicación
export default app;