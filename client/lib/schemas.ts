import z from "zod";

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

	fechaNacimiento: z.string().refine(
		(val) => {
			const fecha = new Date(val);
			return !isNaN(fecha.getTime()) && fecha <= new Date();
		},
		{ message: "Debe ser una fecha válida" }
	),
	correoUsuario: z.string().email({ message: "Debe ingresar un correo valido." }),
});

export const parienteSchemaNoID = parienteSchema.omit({ id: true });
