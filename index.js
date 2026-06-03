// Importaciones
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// Configuración de variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares globales
app.use(cors());
app.use(bodyParser.json());

// Ruta raíz
app.get("/", (req, res) => {
  res.send("<h1>TechLab API</h1><p>Servidor funcionando correctamente</p>");
});

// Health check
app.get("/up", (req, res) => {
  res.json({ status: "ok", message: "Servidor activo" });
});

// Middleware para rutas desconocidas (404)
app.use((req, res) => {
  res.status(404).json({ error: "Ruta no encontrada" });
});

// Inicio del servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`);
});