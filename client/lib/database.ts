"use server";
import { auth } from "@/auth";
import {
	consultaSchema,
	consultaSchemNoID,
	incidenciaSchemaNoID,
	parienteSchemaNoID,
} from "./schemas";
import { z } from "zod";
import { ConsultasFromServer, IncidenciaT, ParienteT } from "./definitions";

export async function getSession() {
	const session = await auth();
	if (!session?.user?.email) {
		throw new Error("No hay sesion iniciada.");
	}

	return {
		email: session.user.email,
		nombre: session.user.name || "",
		imagen: session.user.image || "/google-icon.svg",
	};
}

export async function createUsuario(
	nombre: string,
	correo: string,
	imagen: string
) {
	try {
		const res = await fetch(`${process.env.NEXT_PRIVATE_API_URL}api/usuario`, {
			method: "POST",
			body: JSON.stringify({ nombre, correo, imagen }),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) {
			throw new Error("Error in the server");
		}
	} catch (error) {
		console.log("Error creando el usuario", error);
		throw new Error("Error en el servidor.");
	}
}

export async function createPariente(hijo: z.infer<typeof parienteSchemaNoID>) {
	const fechaNacimiento = hijo.fechaNacimiento.toISOString().split("T")[0];
	const fechaInicio = hijo.fechaInicio
		? hijo.fechaInicio.toISOString().split("T")[0]
		: null;
	const fechaCulminacion = hijo.fechaCulminacion
		? hijo.fechaCulminacion.toISOString().split("T")[0]
		: null;
	const newData = {
		...hijo,
		fechaNacimiento,
		fechaInicio,
		fechaCulminacion,
	};

	console.log(newData);
	try {
		const res = await fetch(`${process.env.NEXT_PRIVATE_API_URL}api/hijo`, {
			method: "POST",
			body: JSON.stringify(newData),
			headers: {
				"Content-Type": "application/json",
			},
		});

		if (!res.ok) {
			throw new Error("Error in the server");
		}
	} catch (error) {
		console.log("Error creando el hijo", error);
		throw new Error("Error en el servidor.");
	}
}

export async function getParientes(correoUsuario: string) {
	try {
		const res = await fetch(
			`${process.env.NEXT_PRIVATE_API_URL}api/hijo/?correo=${correoUsuario}`,
			{
				method: "GET",

				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!res.ok) {
			throw new Error("Error in the server");
		}

		return (await res.json()) as ParienteT[];
	} catch (error) {
		console.log("Error creando el hijo", error);
		throw new Error("Error en el servidor.");
	}
}

export async function getPariente(idPariente: number) {
	try {
		const res = await fetch(
			`${process.env.NEXT_PRIVATE_API_URL}api/hijo/${idPariente}`,
			{
				method: "GET",

				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!res.ok) {
			throw new Error("Error in the server");
		}

		return (await res.json()) as ParienteT;
	} catch (error) {
		console.log("Error creando el hijo", error);
		throw new Error("Error en el servidor.");
	}
}

export async function eliminarPariente(id: number) {
	try {
		const res = await fetch(
			`${process.env.NEXT_PRIVATE_API_URL}api/hijo/${id}`,
			{
				method: "DELETE",
				body: JSON.stringify(id),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!res.ok) {
			throw new Error("Error en el server");
		}
	} catch (error) {
		console.log("Error creando el hijo", error);
		throw new Error("Error en el servidor.");
	}
}

export async function actualizarPariente(hijo: ParienteT) {
	const fechaNacimiento = hijo.fechaNacimiento.toISOString().split("T")[0];
	const fechaInicio = hijo.fechaInicio
		? hijo.fechaInicio.toISOString().split("T")[0]
		: null;
	const fechaCulminacion = hijo.fechaCulminacion
		? hijo.fechaCulminacion.toISOString().split("T")[0]
		: null;
	const newData = {
		...hijo,
		fechaNacimiento,
		fechaInicio,
		fechaCulminacion,
	};
	try {
		const res = await fetch(
			`${process.env.NEXT_PRIVATE_API_URL}api/hijo/${hijo.id}`,
			{
				method: "PUT",
				body: JSON.stringify(newData),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!res.ok) {
			throw new Error("Error en el server");
		}
	} catch (error) {
		console.log("Error creando el hijo", error);
		throw new Error("Error en el servidor.");
	}
}

export async function getTiposIncidencia() {
	try {
		const res = await fetch(
			`${process.env.NEXT_PRIVATE_API_URL}api/tipoincidencia`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!res.ok) {
			throw new Error("Error in the server");
		}

		return await res.json();
	} catch (error) {
		console.log("Error creando el hijo", error);
		throw new Error("Error en el servidor.");
	}
}

//Incidencias funciones
export async function getIncidenciasHijo(id: number) {
	try {
		const res = await fetch(
			`${process.env.NEXT_PRIVATE_API_URL}api/incidencia/hijo/${id}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!res.ok) {
			throw new Error("Error in the server");
		}

		return await res.json();
	} catch (error) {
		console.log("Error creando el hijo", error);
		throw new Error("Error en el servidor.");
	}
}

export async function crearIncidencia(
	incidencia: z.infer<typeof incidenciaSchemaNoID>
) {
	const fechaISO = new Date(incidencia.fecha).toISOString().split("T")[0];
	const newData = { ...incidencia, fecha: fechaISO };
	try {
		const res = await fetch(
			`${process.env.NEXT_PRIVATE_API_URL}api/incidencia`,
			{
				method: "POST",
				body: JSON.stringify(newData),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!res.ok) {
			throw new Error("Error in the server");
		}
	} catch (error) {
		console.log("Error creando la incidencia", error);
		throw new Error("Error en el servidor.");
	}
}

export async function actualizarIncidencia(incidencia: IncidenciaT) {
	const fechaISO = new Date(incidencia.fecha).toISOString().split("T")[0];
	const newData = { ...incidencia, fecha: fechaISO };

	try {
		const res = await fetch(
			`${process.env.NEXT_PRIVATE_API_URL}api/incidencia/${incidencia.id}`,
			{
				method: "PUT",
				body: JSON.stringify(newData),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!res.ok) {
			throw new Error("Error in the server");
		}
	} catch (error) {
		console.log("Error creando la incidencia", error);
		throw new Error("Error en el servidor.");
	}
}

export async function eliminarIncidencia(id: number) {
	try {
		const res = await fetch(
			`${process.env.NEXT_PRIVATE_API_URL}api/incidencia/${id}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!res.ok) {
			throw new Error("Error en el server");
		}
	} catch (error) {
		console.log("Error creando la incidencia", error);
		throw new Error("Error en el servidor.");
	}
}

export async function getTipoEspecialista() {
	try {
		const res = await fetch(
			`${process.env.NEXT_PRIVATE_API_URL}api/tipoespecialidad`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!res.ok) {
			throw new Error("Error in the server");
		}

		return await res.json();
	} catch (error) {
		console.log("Error creando el hijo", error);
		throw new Error("Error en el servidor.");
	}
}

//Consultas funciones
export async function getConsultas(id: number) {
	try {
		const res = await fetch(
			`${process.env.NEXT_PRIVATE_API_URL}api/consulta/hijo/${id}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!res.ok) {
			throw new Error("Error in the server");
		}

		const consultas = await res.json();

		return consultas.map((item: ConsultasFromServer) => ({
			id: item.id,
			idTipoEspecialidad: item.idTipoEspecialidad,
			nombreEspecialista: item.nombreEspecialista,
			idHijo: item.idHijo,
			dia: item.dias[0].dia,
			horarioInicio: item.dias[0].horarioInicio,
			horarioFin: item.dias[0].horarioFin,
		}));
	} catch (error) {
		console.log("Error creando el hijo", error);
		throw new Error("Error en el servidor.");
	}
}

function formatGuardia(consulta: z.infer<typeof consultaSchemNoID>) {
	const {
		dia,
		horarioFin,
		horarioInicio,
		idHijo,
		idTipoEspecialidad,
		nombreEspecialista,
	} = consulta;
	return {
		idHijo: idHijo,
		idTipoEspecialidad: idTipoEspecialidad,
		nombreEspecialista: nombreEspecialista,
		dias: [
			{
				dia: dia,
				horarioInicio: horarioInicio,
				horarioFin: horarioFin,
			},
		],
	};
}

export async function crearConsulta(
	consulta: z.infer<typeof consultaSchemNoID>
) {
	const newData = formatGuardia(consulta);

	try {
		const res = await fetch(`${process.env.NEXT_PRIVATE_API_URL}api/consulta`, {
			method: "POST",
			body: JSON.stringify(newData),
			headers: {
				"Content-Type": "application/json",
			},
		});
		if (!res.ok) {
			throw new Error("Error in the server");
		}
	} catch (error) {
		console.log("Error creando la incidencia", error);
		throw new Error("Error en el servidor.");
	}
}

export async function actualizarConsulta(
	consulta: z.infer<typeof consultaSchema>
) {
	const newData = formatGuardia(consulta);

	try {
		const res = await fetch(
			`${process.env.NEXT_PRIVATE_API_URL}api/consulta/${consulta.id}`,
			{
				method: "PUT",
				body: JSON.stringify(newData),
				headers: {
					"Content-Type": "application/json",
				},
			}
		);
		if (!res.ok) {
			throw new Error("Error in the server");
		}
	} catch (error) {
		console.log("Error creando la incidencia", error);
		throw new Error("Error en el servidor.");
	}
}

export async function eliminarConsulta(id: number) {
	try {
		const res = await fetch(
			`${process.env.NEXT_PRIVATE_API_URL}api/consulta/${id}`,
			{
				method: "DELETE",
				headers: {
					"Content-Type": "application/json",
				},
			}
		);

		if (!res.ok) {
			throw new Error("Error en el server");
		}
	} catch (error) {
		console.log("Error creando la incidencia", error);
		throw new Error("Error en el servidor.");
	}
}

function generateIncidencias() {
	const incidencias = [];
	const now = new Date();
	let idCounter = 1;

	for (let i = 0; i < 6; i++) {
		const monthDate = new Date(now.getFullYear(), now.getMonth() - i, 1);

		for (let j = 0; j < 12; j++) {
			const randomDay = Math.floor(Math.random() * 28) + 1;
			const fecha = new Date(
				monthDate.getFullYear(),
				monthDate.getMonth(),
				randomDay
			);

			incidencias.push({
				id: idCounter++,
				idHijo: 2,
				idTipoIncidencia: Math.floor(Math.random() * 5) + 1,
				fecha,
				duracion: Math.floor(Math.random() * 180) + 1,
				descripcion: `Incidencia generada el ${
					fecha.toISOString().split("T")[0]
				}`,
				es_positiva: Math.random() > 0.5,
			});
		}
	}

	return incidencias;
}

function getLastSixMonthsData(data: IncidenciaT[]) {
	const today = new Date();
	const sixMonthsAgo = new Date();
	sixMonthsAgo.setMonth(today.getMonth() - 5);
	sixMonthsAgo.setDate(1); // Normalize to start of the month

	// Initialize an object with the last 6 months
	const monthNames = [
		"Enero",
		"Febrero",
		"Marzo",
		"Abril",
		"Mayo",
		"Junio",
		"Julio",
		"Agosto",
		"Septiembre",
		"Octubre",
		"Noviembre",
		"Diciembre",
	];

	const groupedData: {
		[key: string]: { mes: string; positiva: number; negativa: number };
	} = {};

	for (let i = 0; i < 6; i++) {
		const date = new Date();
		date.setMonth(today.getMonth() - i);
		const monthKey = monthNames[date.getMonth()];
		groupedData[monthKey] = { mes: monthKey, positiva: 0, negativa: 0 };
	}

	// Filter and aggregate data
	data.forEach(
		({ fecha, es_positiva }: { fecha: Date; es_positiva: boolean }) => {
			const incidentDate = new Date(fecha);
			if (incidentDate >= sixMonthsAgo && incidentDate <= today) {
				const monthKey = monthNames[incidentDate.getMonth()];
				if (groupedData[monthKey]) {
					if (es_positiva) {
						groupedData[monthKey].positiva++;
					} else {
						groupedData[monthKey].negativa++;
					}
				}
			}
		}
	);

	// Convert to array and sort in chronological order
	return Object.values(groupedData).reverse();
}

export async function getReporteEstado() {
	const incidencia = generateIncidencias();

	const lastSixMonth = getLastSixMonthsData(incidencia);

	return lastSixMonth;
}

const positivaData = [
	{ tag: "sensibilidad", positiva: 186, fill: "#f1948a" },
	{ tag: "comunicacion", positiva: 305, fill: "#c39bd3" },
	{ tag: "interaccion", positiva: 237, fill: "#85c1e9" },
	{ tag: "conductas", positiva: 173, fill: "#a2d9ce" },
	{ tag: "habilidades", positiva: 209, fill: "#f7dc6f" },
];

const negativaData = [
	{ tag: "sensibilidad", negativa: 80, fill: "#f1948a" },
	{ tag: "comunicacion", negativa: 200, fill: "#c39bd3" },
	{ tag: "interaccion", negativa: 120, fill: "#85c1e9" },
	{ tag: "conductas", negativa: 190, fill: "#a2d9ce" },
	{ tag: "habilidades", negativa: 130, fill: "#f7dc6f" },
];

export async function getReporteTipoIncidencia() {
	return { positivas: positivaData, negativas: negativaData };
}
