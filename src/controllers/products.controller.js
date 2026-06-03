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
    res.json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener el producto" });
  }
};

// Crea un nuevo producto
const create = async (req, res) => {
  try {
    const data = req.body;
    const product = await productsService.create(data);
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el producto" });
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

export { getAll, getById, create, remove };
