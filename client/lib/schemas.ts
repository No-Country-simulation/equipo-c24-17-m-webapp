import z from "zod";
import { differenceInDays, differenceInHours } from "date-fns";
import { parseTime } from "./utils";

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

	fechaNacimiento: z.coerce
		.date({ message: "Debe ingresar una fecha" })
		.refine(
			(date) => {
				const today = new Date();
				const diff = differenceInDays(today, date);
				return diff >= 365;
			},
			{ message: "Debe ser mayor de 1 año." }
		)
		.refine(
			(date) => {
				const maxDate = new Date();
				maxDate.setFullYear(maxDate.getFullYear() - 18);
				return date >= maxDate;
			},
			{ message: "Debe ser menor de 18 años." }
		),
	correoUsuario: z
		.string()
		.email({ message: "Debe ingresar un correo valido." }),
	fechaInicio: z.coerce.date().optional(),
	fechaCulminacion: z.coerce.date().optional(),
});

export const parienteSchemaNoID = parienteSchema.omit({ id: true }).refine(
	(val) => {
		return (
			val.fechaCulminacion !== undefined &&
			val.fechaInicio !== undefined &&
			val.fechaCulminacion > val.fechaInicio
		);
	},
	{
		message: "La fecha de Inicio debe ser menor a la fecha de Culminación.",
		path: ["fechaInicio"],
	}
);

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

export const consultaSchema = z.object({
	id: z.number(),
	idHijo: z.coerce.number(),
	dia: z.coerce.number({ message: "Seleccione un dia" }),
	horarioInicio: z.string({ message: "Debe agegar una hora." }),
	horarioFin: z.string({ message: "Debe agegar una hora." }),
	idTipoEspecialidad: z.coerce.number({
		message: "Seleccione una especialidad",
	}),
	nombreEspecialista: z.string({
		message: "Ingrese el nombre del especialista.",
	}),
});

export const consultaSchemNoID = consultaSchema.omit({ id: true }).refine(
	(val) => {
		const horaInicio = parseTime(val.horarioInicio);
		const horaFin = parseTime(val.horarioFin);

		return differenceInHours(horaFin, horaInicio) > 0;
	},
	{
		message: "La Hora hasta debe ser mayor.",
		path: ["horarioFin"],
	}
);
