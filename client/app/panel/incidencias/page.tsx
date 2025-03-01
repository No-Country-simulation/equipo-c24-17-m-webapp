import React from "react";
import { TablaIncidencias } from "./tabla-incidencias";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
	getIncidenciasHijo,
	getSession,
	getTiposIncidencia,
} from "@/lib/database";
import { ParienteWithIncidenciasT } from "@/lib/definitions";

export default async function page() {
	const sesion = await getSession();
	const tipoIncidencias = await getTiposIncidencia();
	const hijosConIncidencias: ParienteWithIncidenciasT[] =
		await getIncidenciasHijo(sesion.email);

	return (
		<div>
			<header className="flex justify-between items-center mb-5 max-w-[900px] mx-auto">
				<h1 className="text-center text-2xl mb-5">Inicidencias</h1>
				<div>
					<Button>
						<Link href="/panel/incidencias/crear" className="mr-2">
							Crear Incidencia
						</Link>
					</Button>
				</div>
			</header>
			<div className="flex flex-col gap-8 justify-center">
				{hijosConIncidencias.map((item) => (
					<div key={item.id}>
						<TablaIncidencias
							nombre={`${item.nombre} ${item.apellido}`}
							tipoIncidencia={tipoIncidencias}
							incidencias={item.incidencias}
						/>
					</div>
				))}
			</div>
		</div>
	);
}
