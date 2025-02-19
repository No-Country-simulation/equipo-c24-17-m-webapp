"use server";
import { auth } from "@/auth";

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
