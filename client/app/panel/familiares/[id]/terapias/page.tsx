import React from "react";
import { TablaConsultas } from "./tabla-consultas";

const tipoEspecialidades = [
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
			<TablaConsultas
				terapias={[]}
				tipoEspecialidades={tipoEspecialidades}
				id={id}
			/>
		</div>
	);
}
