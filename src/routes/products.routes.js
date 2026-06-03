// Importaciones
import { Router } from "express";
import * as productsController from "../controllers/products.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = Router();

// GET /api/products - Devuelve todos los productos
router.get("/", authMiddleware, productsController.getAll);

// GET /api/products/:id - Devuelve un producto por ID
router.get("/:id", authMiddleware, productsController.getById);

// POST /api/products/create - Crea un nuevo producto
router.post("/create", authMiddleware, productsController.create); 

// DELETE /api/products/:id - Elimina un producto por ID
router.delete("/:id", authMiddleware, productsController.remove);

export default router;
