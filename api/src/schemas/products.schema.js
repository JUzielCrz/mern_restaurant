import { z } from "zod";

export const createProductSchema = z.object({
  name: z.string({required_error: "Nombre es requerido",}),
  unit: z.string({required_error: "Unidad es requerido", }),
  price: z.string({required_error: "Precio es requerido", }),
  description: z.string().optional(),
  date: z.string().datetime().optional(),
});