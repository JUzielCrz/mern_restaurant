import { Router } from "express";
import {createProduct,deleteProduct,getProduct,getProducts,updateProduct,} from "../../controllers/products.controller.js";
import { auth } from "../../middlewares/auth.middleware.js";
import { validateSchema } from "../../middlewares/validator.middleware.js";
import { createProductSchema } from "../../schemas/products.schema.js";

const router = Router();

router.get("/products", auth, getProducts);
router.get("/products/:id", auth, getProduct);
router.post("/products", auth, validateSchema(createProductSchema), createProduct);
router.put("/products/:id", auth, updateProduct);
router.delete("/products/:id", auth, deleteProduct);

export default router;