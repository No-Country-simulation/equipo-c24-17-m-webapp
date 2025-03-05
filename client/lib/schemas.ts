import z from "zod";
import { differenceInMonths } from "date-fns";
const minDate = new Date();
minDate.setFullYear(minDate.getFullYear() - 1); //fecha maxima para ser mayor de edad

const maxDate = new Date();
maxDate.setFullYear(maxDate.getFullYear() - 18); //fecha minima para ser menor de edad

export const parienteSchema = z.object({
	id: z.number(),
	nombre: z
		.string()
		.min(3, { message: "El nombre debe tener al menos 3 caracteres." })
		.max(50, { message: "El nombre no puede exceder los 50 caracteres." })
		.regex(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, {
			message: "El nombre solo puede contener letras y espacios.",
		}),

	apellido: z
		.string()
		.min(2, { message: "El apellido debe tener al menos 3 caracteres." })
		.max(50, { message: "El apellido no puede exceder los 50 caracteres." })
		.regex(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, {
			message: "El apellido solo puede contener letras y espacios.",
		}),

	nombreDiagnostico: z
		.string()
		.min(2, { message: "El nombre debe tener al menos 3 caracteres." })
		.max(50, { message: "El nombre no puede exceder los 50 caracteres." })
		.regex(/^[A-Za-zÁÉÍÓÚáéíóúñÑ\s]+$/, {
			message: "El nombre solo puede contener letras y espacios.",
		}),

	descripcionDiagnostico: z
		.string()
		.min(2, { message: "La descripción debe tener al menos 3 caracteres." })
		.max(100, {
			message: "La descripción no puede exceder los 100 caracteres.",
		}),

	fechaNacimiento: z
		.string()
		.refine(
			(val) => {
				const fecha = new Date(val);
				return !isNaN(fecha.getTime());
			},
			{ message: "Debe agregar una fecha" }
		)
		.refine(
			(val) => {
				const fecha = new Date(val);
				const diff = differenceInMonths(minDate, fecha);
				return diff > 12;
			},
			{ message: "Debe ser mayor de 1 año." }
		)
		.refine(
			(val) => {
				const fecha = new Date(val);
				const diff = differenceInMonths(fecha, maxDate);
				return diff < 216;
			},
			{ message: "Debe ser menor de 18 años." }
		),
	correoUsuario: z
		.string()
		.email({ message: "Debe ingresar un correo valido." }),
});

export const parienteSchemaNoID = parienteSchema.omit({ id: true });

export const incidenciaSchema = z.object({
	id: z.number(),
	idHijo: z.coerce.number({ message: "Debe seleccionar un hijo." }),
	idTipoIncidencia: z.coerce.number({
		message: "Debe seleccionar un tipo de incidencia.",
	}),
	fecha: z.coerce.date().refine((date) => date <= new Date(), {
		message: "La fecha no puede ser mayor a la actual.",
	}),
	duracion: z.coerce
		.number()
		.min(1, { message: "La duración debe ser mayor a 0." }),
	descripcion: z
		.string()
		.min(2, { message: "La descripción debe tener al menos 3 caracteres." })
		.max(100, {
			message: "La descripción no puede exceder los 100 caracteres.",
		}),
	es_positiva: z.coerce.boolean({ message: "Debe seleccionar una reacción." }),
});

export const incidenciaSchemaNoID = incidenciaSchema.omit({ id: true });
