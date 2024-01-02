import { Router } from "express";
import {createCustomer,deleteCustomer,getCustomer,getCustomers,updateCustomer,} from "../../controllers/customers.controller.js";
import { auth } from "../../middlewares/auth.middleware.js";
// import { validateSchema } from "../../middlewares/validator.middleware.js";
// import { createProductSchema } from "../../schemas/products.schema.js";

const router = Router();

router.get("/customers", auth, getCustomers);
router.get("/customers/:id", auth, getCustomer);
router.post("/customers", auth,createCustomer);
router.put("/customers/:id", auth, updateCustomer);
router.delete("/customers/:id", auth, deleteCustomer);

export default router;