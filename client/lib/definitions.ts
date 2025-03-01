import { z } from "zod";
import { incidenciaSchema, parienteSchema } from "./schemas";

export type ParienteT = z.infer<typeof parienteSchema>;

export type IncidenciaT = z.infer<typeof incidenciaSchema>;

export interface FieldErrors {
	fieldErrors: {
		[key: string]: string[];
	};
}

export interface FormType<T> {
	setError: (name: T, error: { message: string }) => void;
}

export type TipoIncidenciaT = {
	id: number;
	nombre: string;
};

export type ParienteWithIncidenciasT = ParienteT & {
	incidencias: IncidenciaT[];
};
