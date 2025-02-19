import IniciarSesion from "@/components/iniciar-sesion";
import React from "react";

export default function page() {
	return (
		<div className="flex items-center justify-center min-h-screen flex-col gap-4">
			<p>Registrate con tu cuenta de Google.</p>
			<IniciarSesion />
		</div>
	);
}
