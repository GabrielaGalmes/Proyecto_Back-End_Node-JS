// Importaciones
import * as authService from "../services/auth.service.js";

// Autentica al usuario y devuelve un token
const login = async (req, res) => {
  try {
    const credentials = req.body;
    const result = await authService.login(credentials);
    res.json(result);
  } catch (error) {
    res.status(401).json({ error: "Credenciales inválidas" });
  }
};

export { login };
