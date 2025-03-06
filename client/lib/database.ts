"use server";
import { auth } from "@/auth";
import { incidenciaSchemaNoID, parienteSchemaNoID } from "./schemas";
import { z } from "zod";
import { IncidenciaT, ParienteT } from "./definitions";

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
