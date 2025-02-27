import { z } from "zod";
import { parienteSchema, parienteSchemaNoID } from "./schemas";

export type ParienteT = z.infer<typeof parienteSchema>;

export type KeyofPariente = keyof z.infer<typeof parienteSchemaNoID>;
