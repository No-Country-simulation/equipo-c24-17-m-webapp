import React from "react";
import { TablaMetricas } from "./tabla-metricas";
import { getReporteEstado, getReporteTipoIncidencia } from "@/lib/database";

export default async function page({
	params,
}: {
	params: Promise<{ id: number }>;
}) {
	const { id } = await params;
	const reporteEstados = await getReporteEstado(id);
	const reporteTipoIncidencia = await getReporteTipoIncidencia(id);
	return (
		<div>
			<TablaMetricas
				reporteEstado={reporteEstados}
				reporteTipoIncidencia={reporteTipoIncidencia}
			/>
		</div>
	);
}
