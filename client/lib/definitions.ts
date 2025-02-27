import { z } from "zod";
import { parienteSchema } from "./schemas";

export type ParienteT = z.infer<typeof parienteSchema>;
