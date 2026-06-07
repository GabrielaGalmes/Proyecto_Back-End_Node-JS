// Importaciones
import * as productsService from "../services/products.service.js";

// Devuelve todos los productos
const getAll = async (req, res) => {
  try {
    const products = await productsService.getAll();
    res.json(products);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los productos" });
  }
};

// Devuelve un producto por ID
const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productsService.getById(id);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

// Crea un nuevo producto
const create = async (req, res) => {
  try {
    const data = req.body;
     if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({ error: "Faltan datos del producto" });
    }
    const product = await productsService.create(data);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
  }
};

// Actualiza un producto por ID
const update = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    if (!data || Object.keys(data).length === 0) {
      return res.status(400).json({ error: "Faltan datos para actualizar" });
    }
    const product = await productsService.update(id, data);
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
};

// Elimina un producto por ID
const remove = async (req, res) => {
  try {
    const { id } = req.params;
    await productsService.remove(id);
    res.json({ message: `Producto ${id} eliminado correctamente` });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
};

export { getAll, getById, create, update, remove };
