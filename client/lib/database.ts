"use server";
import { auth } from "@/auth";
import { parienteSchemaNoID } from "./schemas";
import { z } from "zod";

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
	try {
		const res = await fetch(`${process.env.NEXT_PRIVATE_API_URL}api/hijo`, {
			method: "POST",
			body: JSON.stringify(hijo),
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
