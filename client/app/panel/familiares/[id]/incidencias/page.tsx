import React from "react";
import { TablaIncidencias } from "./tabla-incidencias";
import { getIncidenciasHijo, getTiposIncidencia } from "@/lib/database";

export default async function page({
	params,
}: {
	params: Promise<{ id: number }>;
}) {
	const { id } = await params;
	const tipoIncidencia = await getTiposIncidencia();

	const incidencias = await getIncidenciasHijo(id);

	return (
		<div>
			<TablaIncidencias
				id={Number(id)}
				tipoIncidencia={tipoIncidencia}
				incidencias={incidencias}
			/>
		</div>
	);
}
