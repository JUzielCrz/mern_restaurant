import { Router } from "express";
import {createOrder,deleteOrder,getOrder,getOrders,updateOrder,} from "../../controllers/orders.controller.js";
import { auth } from "../../middlewares/auth.middleware.js";
// import { validateSchema } from "../../middlewares/validator.middleware.js";
// import { createProductSchema } from "../../schemas/products.schema.js";

const router = Router();

router.get("/orders", auth, getOrders);
router.get("/orders/:id", auth, getOrder);
router.post("/orders", auth,createOrder);
router.put("/orders/:id", auth, updateOrder);
router.delete("/orders/:id", auth, deleteOrder);

export default router;