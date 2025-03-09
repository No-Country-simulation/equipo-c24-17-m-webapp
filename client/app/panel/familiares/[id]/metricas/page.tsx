import React from "react";
import { TablaMetricas } from "./tabla-metricas";
import { getReporteEstado, getReporteTipoIncidencia } from "@/lib/database";

export default async function page() {
	const reporteEstados = await getReporteEstado();
	const reporteTipoIncidencia = await getReporteTipoIncidencia();
	return (
		<div>
			<TablaMetricas
				reporteEstado={reporteEstados}
				reporteTipoIncidencia={reporteTipoIncidencia}
			/>
		</div>
	);
}
