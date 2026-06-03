// Importaciones
import { Router } from "express";

const router = Router();

// GET /api/products - Devuelve todos los productos
router.get("/", (req, res) => {
  res.json({ message: "Lista de productos" });
});

// GET /api/products/:id - Devuelve un producto por ID
router.get("/:id", (req, res) => {
  res.json({ message: `Producto con ID: ${req.params.id}` });
});

// POST /api/products/create - Crea un nuevo producto
router.post("/create", (req, res) => {
  res.json({ message: "Producto creado" });
});

// DELETE /api/products/:id - Elimina un producto por ID
router.delete("/:id", (req, res) => {
  res.json({ message: `Producto con ID: ${req.params.id} eliminado` });
});

export default router;