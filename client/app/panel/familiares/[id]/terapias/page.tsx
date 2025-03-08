import React from "react";
import { TablaConsultas } from "./tabla-consultas";
import { getConsultas, getTipoEspecialista } from "@/lib/database";

export default async function page({
	params,
}: {
	params: Promise<{ id: number }>;
}) {
	const { id } = await params;
	const tipoEspecialistas = await getTipoEspecialista();

	const consultas = await getConsultas(id);

	return (
		<div>
			<TablaConsultas
				consultas={consultas}
				tipoEspecialidades={tipoEspecialistas}
				id={id}
			/>
		</div>
	);
}
