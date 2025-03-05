import React from "react";
import { TablaIncidencias } from "./tabla-incidencias";
import {
	getIncidenciasHijo,
	getSession,
	getTiposIncidencia,
} from "@/lib/database";
import { ParienteWithIncidenciasT } from "@/lib/definitions";

export default async function page({
	params,
}: {
	params: Promise<{ id: number }>;
}) {
	const { id } = await params;
	const tipoIncidencia = await getTiposIncidencia();
	const { email } = await getSession();
	const familiares: ParienteWithIncidenciasT[] = await getIncidenciasHijo(
		email
	);
	const hijoIncidencias =
		familiares.find((item) => Number(item.id) === Number(id))?.incidencias ||
		[];

	return (
		<div>
			<TablaIncidencias
				id={Number(id)}
				tipoIncidencia={tipoIncidencia}
				incidencias={hijoIncidencias}
			/>
		</div>
	);
}
