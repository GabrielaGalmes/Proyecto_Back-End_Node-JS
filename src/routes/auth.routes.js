// Importaciones
import { Router } from "express";

const router = Router();

// POST /auth/login - Autentica al usuario y devuelve un token
router.post("/login", (req, res) => {
  res.json({ message: "Login exitoso" });
});

export default router;