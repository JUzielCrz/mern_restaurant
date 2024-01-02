import Product from "../models/products.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, unit, price, category, barcode, description, stock, stock_minimun, image } = req.body;
    const newProduct = new Product({
      name, unit,price,category,barcode,description, stock, stock_minimun, image
    });
    await newProduct.save();
    res.json(newProduct);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findByIdAndDelete(req.params.id);
    if (!deletedProduct) return res.status(404).json({ message: "Product no encontrado" });

    return res.sendStatus(204);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const updateProduct= async (req, res) => {
  try {
    const { name, unit, price, category, barcode, description, stock, stock_minimun, image } = req.body;
    const productUpdated = await Product.findOneAndUpdate(
      { _id: req.params.id },
      { name, unit, price, category, barcode, description, stock, stock_minimun, image },
      { new: true }
    );
    return res.json(productUpdated);
  } catch (error) {
    return res.status(500).json({ message: error.message});
  }
};

export const getProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "product not found" });
    return res.json(product);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};