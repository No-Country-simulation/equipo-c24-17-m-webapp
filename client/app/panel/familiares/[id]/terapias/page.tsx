import React from "react";
import { TablaTerapias } from "./tabla-terapias";

const tipoEspecialidad = [
	{ id: 1, nombre: "Especialidad 1 " },
	{ id: 2, nombre: "Especialidad 2 " },
];

export default async function page({
	params,
}: {
	params: Promise<{ id: number }>;
}) {
	const { id } = await params;
	// const tipoEspecialidad = await getTiposIncidencia();

	// const terapias = await getIncidenciasHijo(id);
	return (
		<div>
			<TablaTerapias
				terapias={[]}
				tipoEspecialidad={tipoEspecialidad}
				id={id}
			/>
		</div>
	);
}
