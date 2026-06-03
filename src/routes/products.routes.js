// Importaciones
import { Router } from "express";
import * as productsController from "../controllers/products.controller.js";

const router = Router();

// GET /api/products - Devuelve todos los productos
router.get("/", productsController.getAll);

// GET /api/products/:id - Devuelve un producto por ID
router.get("/:id", productsController.getById);

// POST /api/products/create - Crea un nuevo producto
router.post("/create", productsController.create); 

// DELETE /api/products/:id - Elimina un producto por ID
router.delete("/:id", productsController.remove);

export default router;
