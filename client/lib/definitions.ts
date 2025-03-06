import { z } from "zod";
import { incidenciaSchema, parienteSchema, consultaSchema } from "./schemas";

export type ParienteT = z.infer<typeof parienteSchema>;

export type IncidenciaT = z.infer<typeof incidenciaSchema>;
export type ConsultaT = z.infer<typeof consultaSchema>;

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
