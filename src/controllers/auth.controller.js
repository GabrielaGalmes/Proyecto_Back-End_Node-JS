// Importaciones
import jwt from "jsonwebtoken";

// Credenciales hardcodeadas (en un proyecto real vendrían de la base de datos)
const VALID_USER = {
  email: "admin@techlab.com",
  password: "admin123",
};

// Autentica al usuario y devuelve un token
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validar que las credenciales coincidan
    if (email !== VALID_USER.email || password !== VALID_USER.password) {
      return res.status(401).json({ error: "Credenciales inválidas" });
    }

    // Generar token JWT con expiración de 1 hora
    const token = jwt.sign(
      { email },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({ token });
  } catch (error) {
    res.status(500).json({ error: "Error en el servidor" });
  }
};

export { login };
