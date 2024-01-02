import { Router } from "express";
import {createCategory,deleteCategory,getCategory,getCategories,updateCategory,} from "../../controllers/products.controller.js";
import { auth } from "../../middlewares/auth.middleware.js";

const router = Router();

router.get("/categories", auth, getCategories);
router.get("/categories/:id", auth, getCategory);
router.post("/categories", auth, createCategory);
router.put("/categories/:id", auth, updateCategory);
router.delete("/categories/:id", auth, deleteCategory);

export default router;