import React from "react";
import FormIncidencia from "./form-inicidencia";
import { getParientes, getSession, getTiposIncidencia } from "@/lib/database";
import { redirect } from "next/navigation";

export default async function page() {
	const tipoIncidencia = await getTiposIncidencia();
	const sesion = await getSession();
	const parientes = await getParientes(sesion.email);
	if (parientes.length === 0) {
		redirect("/panel/incidencias");
	}
	return (
		<div>
			<h1>Crear Incidencia</h1>
			<FormIncidencia
				id={1}
				tipoIncidencia={tipoIncidencia}
				parientes={parientes}
			/>
		</div>
	);
}
