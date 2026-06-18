import { describe, test, expect, beforeAll } from "vitest";
import request from "supertest";
import dotenv from "dotenv";
import app from "../src/app.js";

dotenv.config();

let token;

// Antes de todos los tests, hacemos login para obtener el token
beforeAll(async () => {
  const res = await request(app)
    .post("/auth/login")
    .send({ email: "admin@techlab.com", password: "admin123" });
  token = res.body.token;
});

// Tests de productos
describe("GET /api/products", () => {
  test("devuelve 401 sin token", async () => {
    const res = await request(app).get("/api/products");
    expect(res.status).toBe(401);
  });

  test("devuelve 200 con token válido", async () => {
    const res = await request(app)
      .get("/api/products")
      .set("Authorization", `Bearer ${token}`);
    expect(res.status).toBe(200);
  });

  test("la respuesta es un array", async () => {
    const res = await request(app)
      .get("/api/products")
      .set("Authorization", `Bearer ${token}`);
    expect(Array.isArray(res.body)).toBe(true);
  });
});

describe("POST /auth/login", () => {
  test("devuelve token con credenciales válidas", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({ email: "admin@techlab.com", password: "admin123" });
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("token");
  });

  test("devuelve 401 con credenciales inválidas", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({ email: "malo@test.com", password: "incorrecta" });
    expect(res.status).toBe(401);
  });

  test("devuelve 400 si faltan datos", async () => {
    const res = await request(app)
      .post("/auth/login")
      .send({ email: "admin@techlab.com" });
    expect(res.status).toBe(400);
  });
});

describe("Rutas desconocidas", () => {
  test("devuelve 404 para rutas no definidas", async () => {
    const res = await request(app).get("/ruta-inexistente");
    expect(res.status).toBe(404);
  });
});