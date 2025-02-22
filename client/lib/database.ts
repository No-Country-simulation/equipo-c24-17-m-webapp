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

// export async function getSession() {
// 	const session = await auth();

	
// 	if (!session?.user?.email) {
// 		if (process.env.NODE_ENV === "development") {
// 			return {
// 				email: "fake.user@example.com",
// 				nombre: "Usuario Falso",
// 				imagen: "/google-icon.svg",
// 			};
// 		}
// 		throw new Error("No hay sesion iniciada.");
// 	}

// 	return {
// 		email: session.user.email,
// 		nombre: session.user.name || "",
// 		imagen: session.user.image || "/google-icon.svg",
// 	};
// }
